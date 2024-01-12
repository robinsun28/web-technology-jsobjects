const blog1 = {
  title: "Blog 1",
  name: "Robinsun Maharjan",
  addedDate: new Date(),
  views: 100,
  comments: 78,
  status: "published",
  url: "https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=",
  changeStatus: function (status) {
    this.status = status;
  },
  addComments: function () {
    this.comments += 1;
    return this.comments;
  },
  addPageVisit: function () {
    this.views += 1;
  },
};

const blog2 = {
  title: "Blog 2",
  name: "Robinsun Maharjan",
  addedDate: new Date(),
  views: 500,
  comments: 24,
  status: "published",
  url: "https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=",
  changeStatus: function (status) {
    this.status = status;
  },
  addComments: function () {
    this.comments += 1;
    return this.comments;
  },
  addPageVisit: function () {
    this.views += 1;
  },
};

const blogs = [blog1, blog2];
console.log(blogs);

const blogsDiv = document.getElementById("blogs");

blogs.map((blog) => {
  let titlte = document.createElement("h3");
  titlte.innerHTML = blog.title;
  let authorName = document.createElement("p");
  authorName.innerHTML = "<b>By: </b>" + blog.name;
  let addedAt = document.createElement("p");
  addedAt.innerHTML = "<b>Added at: </b>" + blog.addedDate;
  let readAt = document.createElement("p");
  readAt.innerHTML = blog.views;
  let blogImage = document.createElement("img");
  blogImage.src = blog.url;
  blogImage.width = "250";
  blogImage.height = "250";
  let blogDiv = document.createElement("div");
  let leftSide = document.createElement("div");
  let rightSide = document.createElement("div");

  blogDiv.classList.add("d-flex", "border");
  leftSide.appendChild(titlte);
  leftSide.appendChild(blogImage);

  let variableDiv = document.createElement("div");
  variableDiv.classList.add("d-flex", "mt-1");
  let publiShstatus = document.createElement("button");
  publiShstatus.innerHTML = "<b>Publish/</b>";
  publiShstatus.classList.add("border", "bg-transparent");

  let draftStatus = document.createElement("button");
  draftStatus.innerHTML = "<b>Draft/</b>";
  draftStatus.classList.add("border", "bg-transparent");

  let archivedStatus = document.createElement("button");
  archivedStatus.innerHTML = "<b>Archive</b>";
  archivedStatus.classList.add("border", "bg-transparent");

  let comment = document.createElement("button");
  comment.innerHTML = "<b>Add comments</b>";
  comment.classList.add("border", "bg-transparent");

  let read = document.createElement("button");
  read.innerHTML = "<b>Read It</b>";
  read.classList.add("border", "bg-transparent");

  variableDiv.appendChild(publiShstatus);
  variableDiv.appendChild(draftStatus);
  variableDiv.appendChild(archivedStatus);
  variableDiv.appendChild(comment);
  variableDiv.appendChild(read);

  leftSide.appendChild(variableDiv);

  leftSide.classList.add("p-2", "border-end");

  let readBy = document.createElement("p");
  readBy.innerHTML = "<b>Read By: </b>" + blog.views;

  let recievedComments = document.createElement("p");
  recievedComments.innerHTML = "<b>Recived Comments: </b>" + blog.comments;

  let currentStatus = document.createElement("P");
  currentStatus.innerHTML = "<b>Status: </b>" + blog.status;
  rightSide.appendChild(authorName);
  rightSide.appendChild(addedAt);
  rightSide.appendChild(readAt);
  rightSide.appendChild(readBy);
  rightSide.appendChild(recievedComments);
  rightSide.appendChild(currentStatus);

  rightSide.classList.add("p-2");

  blogDiv.appendChild(leftSide);
  blogDiv.appendChild(rightSide);

  blogsDiv.appendChild(blogDiv);

  read.addEventListener("click", () => {
    blog.addPageVisit();
    readBy.innerHTML = "<b>Read By: </b>" + blog.views;
  });

  comment.addEventListener("click", () => {
    blog.addComments();
    recievedComments.innerHTML = "<b>Recived Comments: </b>" + blog.comments;
  });

  publiShstatus.addEventListener("click", () => {
    blog.changeStatus("Publish");
    currentStatus.innerHTML = "<b>Status: </b>" + blog.status;
  });
  draftStatus.addEventListener("click", () => {
    blog.changeStatus("Draft");
    currentStatus.innerHTML = "<b>Status: </b>" + blog.status;
  });
  archivedStatus.addEventListener("click", () => {
    blog.changeStatus("Archive");
    currentStatus.innerHTML = "<b>Status: </b>" + blog.status;
  });
});
