import Video from "./Video";
import "animate.css/animate.css";

export default function MainPage() {
  return (
    <div className="main_page_wrapper">
      <section className="main_page_about">
       
        <div className="about_text animate__animated animate__backInDown">
        <h1>Welcome to RS Lang!</h1>
        <p>
          RS Lang - это уникальное приложение для изучения английского.
          Увлекательные игры для тренировки слов и метод интервального
          повторения для запоминания слов навсегда.
        </p>
          </div>
          <div className="about_cards">

          </div>
      </section>
      <section className="main_page_video"><Video></Video></section>
      <section className="main_page_team">team - to do</section>
    </div>
  );
}
