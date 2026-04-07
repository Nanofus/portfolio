import readingTime from "reading-time";

export default function getPostData(post: { id: string; body?: string | undefined }) {
	return {
		id: post.id,
		readingTime: post.body ? readingTime(post.body).text : "",
	};
}
