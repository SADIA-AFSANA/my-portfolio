import logo from './logo.svg';
import './App.css';
import Contact from './Contact/Contact';

function App() {
  return (
    <div >
      <div className="navbar bg-pink-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">PORTFOLIO</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a className=''>Home</a></li>


            <li><a href='#contact-me'>Contact me</a></li>
          </ul>
        </div>
      </div>
      <p className='py-10 '>
        <a href="https://drive.google.com/file/d/1Zk2XO3VgtjCrFJqWhiNITLgG2AyPgURr/view?usp=share_link" target="blank" download="">
          <button className="btn btn-primary">Download resume</button>
        </a>
      </p>
      <div className='grid grid-cols-3'>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgE-UJ7ddf2NYP6gd16FtQ8ZN0na1a2hImsA&usqp=CAU" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Resale-car</h2>
            <p>Old cars are sold on this website.
              The main functionality is there are admin, seller, and buyer routes available where the admin can make
              the seller verified and make an admin as well, Orders are confirmed through Payment</p>
            <p><button className='btn btn-info'>More details</button></p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG0PGezHg4YAnJyZTEuYkK7Rty7zrRYRuZRg&usqp=CAU" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Tailor-service</h2>
            <p>Tailored fit is a sleek and timeless style of suit. It is not as roomy as a Regular Fit suit and less fitted than a Slim or Skinny Fit suit. This fit features a shaped waist and clean lines which allow for a stylish and dapper silhouette.
            </p>
            <p><button className='btn btn-info'>More details</button></p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gY085rZmAZJem5u0NGVhLQd_msscC85Hig&usqp=CAU" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Programming-Language</h2>
            <p>Common styles are imperative, functional, logical, and object-oriented languages. Programmers can choose from these coding language paradigms to best-serve their needs for a specific project.</p>
            <p><button className='btn btn-info'>More details</button></p>
          </div>
        </div>
      </div>
      {/* contact
       */}
      <div className='my-10' id='contact-me'>
        <h2 className='font-bold text-center'>Contact me</h2>

      </div>
    </div>
  );
}

export default App;
