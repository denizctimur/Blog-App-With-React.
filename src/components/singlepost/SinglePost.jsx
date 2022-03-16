import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:<b>Deniz</b>
          </span>
          <span className="singlePostDate">1 Hour Ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sed
          debitis veniam nisi cum eos excepturi laudantium maiores velit omnis
          modi, eius autem nam officiis atque sapiente est illum expedita! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Earum sed debitis
          veniam nisi cum eos excepturi laudantium maiores velit omnis modi,
          eius autem nam officiis atque sapiente est illum expedita! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Earum sed debitis veniam
          nisi cum eos excepturi laudantium maiores velit omnis modi, eius autem
          nam officiis atque sapiente est illum expedita! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Earum sed debitis veniam nisi cum
          eos excepturi laudantium maiores velit omnis modi, eius autem nam
          officiis atque sapiente est illum expedita! nam officiis atque
          sapiente est illum expedita! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Earum sed debitis veniam nisi cum eos excepturi
          laudantium maiores velit omnis modi, eius autem nam officiis atque
          sapiente est illum expedita!
        </p>
      </div>
    </div>
  );
}
