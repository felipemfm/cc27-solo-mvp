import "./Header.css";

interface props {
  user: {
    name: string;
    token: string;
  } | null;
}

const Header: React.FC<props> = (props) => {
  return (
    <div className="header">
      <h1 className="title">Title</h1>
      {props.user && (
        <div className="user_info">
          <p>{props.user.name}</p>
          <span>#{props.user.token}</span>
        </div>
      )}
    </div>
  );
};

export default Header;
