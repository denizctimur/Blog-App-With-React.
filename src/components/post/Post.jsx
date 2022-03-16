import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://www.w3schools.com/howto/img_forest.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
        necessitatibus commodi ipsum quod. Aspernatur, facere quod quos vel
        nulla quis, commodi rem perferendis voluptatum suscipit sapiente
        architecto aliquid voluptatem omnis. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Obcaecati necessitatibus commodi ipsum
        quod. Aspernatur, facere quod quos vel nulla quis, commodi rem
        perferendis voluptatum suscipit sapiente architecto aliquid voluptatem
        omnis. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Obcaecati necessitatibus commodi ipsum quod. Aspernatur, facere quod
        quos vel nulla quis, commodi rem perferendis voluptatum suscipit
        sapiente architecto aliquid voluptatem omnis.
      </p>
    </div>
  );
}
