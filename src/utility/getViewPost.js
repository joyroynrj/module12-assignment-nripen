export default async function getViewPost(id) {
  const res = await fetch(
    `https://basic-blog.teamrabbil.com/api/post-details/${id}`
  );
  if (res?.Status === 200) {
    throw new Error("Error fetching posts");
  }
  const data = res.json();
  return data;
}
