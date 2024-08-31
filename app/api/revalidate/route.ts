import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export const runtime = "edge";

export async function POST(req: NextRequest) {
	try {
		const { isValidSignature, body } = await parseBody<
			BodyInit & { _type: string }
		>(req as unknown as NextRequest, process.env.SANITY_REVALIDATE_SECRET);

		if (!isValidSignature) {
			const message = "Invalid signature";
			return new Response(JSON.stringify({ message, isValidSignature, body }), {
				status: 401,
			});
		}

		if (!body?._type) {
			return new Response(body, { status: 400 });
		}

		revalidateTag(body._type);
		return NextResponse.json({
			status: 200,
			revalidated: true,
			now: Date.now(),
			body,
		});
	} catch (error: unknown) {
		console.error(error);
		if (error instanceof Error) {
			return new Response(error.message, { status: 500 });
		}
		return new Response("Error", { status: 500 });
	}
}
