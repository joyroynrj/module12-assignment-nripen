export default async function getNewPosts() {
  const res = await fetch("https://basic-blog.teamrabbil.com/api/post-newest");
  if (res?.Status === 200) {
    throw new Error("Error fetching posts");
  }
  const data = res.json();
  return data;
}
