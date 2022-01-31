import { useState, useEffect } from "react";
import { API_URL } from './App';
import { Footer } from "./Footer";

export function Resources() {
  const [links, setLinks] = useState([]);

  const getLinks = () => {
    fetch(`${API_URL}/links`, { method: "GET" })
      .then((data) => data.json())
      .then((lnk) => setLinks(lnk));
  };


  useEffect(getLinks, []);
  return (
    <div>
      <h2 className='reso-head'>Resources</h2>
      <h1 className='reso-link'>Links</h1>
      {links.map(({ link }) => (<ResourcesDet link={link} />))}
      <Footer />
    </div>
  );
}
function ResourcesDet({ link }) {
  return (
    <div className='link-design'>
      <a className='link-color' rel="noreferrer" target="_blank" href={link}>{link}</a>
    </div>
  );
}

// const links = [{link:"http://www.huffingtonpost.com/entry/this-is-your-brain-on-nature_us_55bf98fee4b0b23e3ce35d99"},
// {link:"http://ngm.nationalgeographic.com/2016/01/call-to-wild-text"},
// {link:"https://www.youtube.com/watch?v=BiXrRK-yrfA"},
// {link:"http://uk.businessinsider.com/scientific-benefits-of-nature-outdoors-2016-4?r=US&IR=T/#3-stress-relief-3"},
// {link:"http://www.nytimes.com/2010/07/06/health/06real.html"},
// {link:"http://www.davidsuzuki.org/media/news/2013/07/report-confirms-daily-dose-of-nature-boosts-happiness-wellbeing/"},
// {link:"http://health.usnews.com/health-news/family-health/heart/articles/2008/06/23/time-in-the-sun-how-much-is-needed-for-vitamin-d"},
// {link:"http://www.mnn.com/health/fitness-well-being/stories/study-nature-inspires-more-creative-minds"},
// {link:"http://www.rochester.edu/news/show.php?id=3639"},
// {link:"http://www.dec.ny.gov/lands/90720.html"},
// ]