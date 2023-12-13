import "./article.css";
import Card from "../components/Card";
const Article = () => {
  return (
    <>
      <img
      className="image"
        alt="article"
        src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <h3 className="title">Finibus Bonorum et Malorum</h3>
      <p className="author">Written by John doe</p>
      <div className="line"></div>
      <p className="details">
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?" 1914 translation by H. Rackham "But I must
        explain to you how all this mistaken idea of denouncing pleasure and
        praising pain was born and I will give you a complete account of the
        system, and expound the actual teachings of the great explorer of the
        truth, the master-builder of human happiness. No one rejects, dislikes,
        or avoids pleasure itself, because it is pleasure, but because those who
        do not know how to pursue pleasure rationally encounter consequences
        that are extremely painful. Nor again is there anyone who loves or
        pursues or desires to obtain pain of itself, because it is pain, but
        because occasionally circumstances occur in which toil and pain can
        procure him some great pleasure. To take a trivial example, which of us
        ever undertakes laborious physical exercise, except to obtain some
        advantage from it? But who has any right to find fault with a man who
        chooses to enjoy a pleasure that has no annoying consequences, or one
        who avoids a pain that produces no resultant pleasure?"
      </p>
    </>
  );
};
export default Article;
