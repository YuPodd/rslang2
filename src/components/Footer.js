import rs_logo from '../assets/rs_logo.svg'
export default function Footer() {
    const arrayLinks =  [
        {link:'https://github.com/YuPodd', owner: 'Yuliya'},
        {link:'https://github.com/Abbos-rON2', owner: 'Abbos'},
        {link:'https://github.com/Likvidas', owner: 'Sergey'},
        {link:'https://github.com/MariyaSin', owner: 'Mariya'}
        
    ];
    const links = arrayLinks.map(({link, owner})=>{
        return <a href={link} key={owner}>{owner}</a>
    });
  return (
    <footer className="">
      <div className="footer_wrapper">
        <div className="github_wrapper">
          {links}
        </div>
        <a href="https://rs.school/">
          <img src={rs_logo} className="rs_logo" alt="rs" />
        </a>
      </div>
    </footer>
  );
}
