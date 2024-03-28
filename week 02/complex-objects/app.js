
const blogPost = {
    title: "My first blog post",
    author: {
      name: "Mark",
      age: 38,
      favouriteColour: "light green",
    },
    tags: ["blue", "green", "train", "car"],
    content: "This is my blog post about the joy of transport.",
  };
  
console.log(blogPost.author.name); 
console.log(blogPost.tags[0]);
console.log(blogPost.tags.length);

console.log(
    `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`
  ); // Output: There are 4 tags for post "My first blog post":
  for (let i = 0; i < blogPost.tags.length; i++) {
    console.log(blogPost.tags[i]); // Output: coding, javascript, objects, arrays
  }
  console.log(`Tags for post "${blogPost.title}":`); // Output: Tags for post "My first blog post":
for (let tag of blogPost.tags) {
  console.log(tag); // Output: coding, javascript, objects, arrays
}