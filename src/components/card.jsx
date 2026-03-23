import s from "./card.module.css";

export const Card = (props) => {
  return (
    <div className={s.card}>
      <img src={props.imgSrc} alt={props.alt} />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};
export const Card1 = ({imgSrc, alt, title, text}) => {
  return (
    <div className={s.card}>
      <img src={imgSrc} alt={alt} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};