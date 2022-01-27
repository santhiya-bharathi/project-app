
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import { Switch, Route, useParams} from "react-router-dom";
import TextField from '@mui/material/TextField';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


function App() {

const INITIAL_BLOGS = [
  {picture:"https://s1.1zoom.me/big0/504/Cosmos_plant_Sky_Clouds_587191_1280x854.jpg", moredetails:`A number of years ago I went on holiday to a beautiful part of Portugal. We stayed in a converted farmhouse in the middle of a national park. The farmhouse was in a valley. We arrived in the evening when the birds were just starting to roost. It was still warm and the air smelled sweet with pollen. You could hear the hum of crickets. A small river flowed through that valley. We opened a rickety gate and crossed a small wooden bridge. As we walked along the narrow path that led to our house I had a clear vision of what my morning routine would be like for the next fourteen days. I had been working hard for the last few months and I felt tired. I wanted this holiday to be a mini retreat. I would wake up early each day when it was still quite cool and I would meditate for a while. I imagined myself sitting in a peaceful spot, my mind calm, my body relaxed… listening to the river flowing, hearing the birds and wildlife starting to stir, feeling the first rays of the early morning sun hit my face as it rose over the top of the hill. Present. Even as I write this now, it sounds like paradise to me.

  I work up early the next morning and it was just as I imagined it would be. There is nothing like the stillness of the early morning. There was a gentle, peaceful feeling that enveloped me. It didn’t come from me but seemed to come from the earth and the river and the mountains. Everything was clearer than usual. The mind wasn’t racing here and there the way it normally does. I had never been to this place before but it felt welcoming and familiar. I found a spot to sit quietly. I could hear the faint hum of insects. The air was very still and there was only an occasional gentle breeze. A fly landed on my face. After a moment or two I carefully lifted my hand and gently ushered him away. Then another fly landed on my face. And another. And another. The feeling I had experienced a few moments ago was gone. I endured thirty minutes or so of mild torture that first morning before I admitted defeat and retreated to the farmhouse.
  
  In the ensuing days I experimented with different approaches. I went to a different spot to try and escape the flies. I went at different times of the day. I had been practicing meditation for many years already and I had dealt with all kinds of distractions and obstacles in the past. I was sure that this would be no different. I had heard lots of stories and parables about similar experiences where the “lesson” is: “Your resistance to things not being the way you want them to be is the real source of your suffering. Drop your resistance. Drop your attachment to things being a certain way”. Words. I had repeated these same words to others many times. The words made sense to me and I believed them. I said these words to myself now. I tried to feel compassion for each fly that landed on me. I tried to change my perspective. I tried to simply experience the movements of each fly as pure sensation on my skin. I reminded myself that flies are an important part of the ecosystem and tried to appreciate each fly. I was lying to myself. Things weren’t going the way I wanted them to. I really hated those flies. I just felt irritated and tense. I was in a constant state of vigilance…waiting for the next fly to land on my skin, knowing that I would have to “mindfully” endure its presence for as long as possible until finally, when I could take no more, I would choose to “mindfully” flick it away… knowing also that in a few moments it would inevitably return. I thought about abandoning my plan to practice outside in nature and moving inside to the farmhouse. I’m stubborn though and I endured several more mornings of mental torture.
  
  The fact that I couldn’t drop my resistance to things being a certain way was making things worse. I was also annoyed with myself now. The more I “tried” to be patient and accepting about the flies, the worse I felt. All this effort was adding unnecessary layers of suffering to my experience. More words. I already knew this. I had heard this advice many times in the past: “Stop making effort. When you practice just allow everything to be exactly as it is.”
  
  On this morning, I was sitting in a sheltered spot near the river under an old Holm Oak. If you observed me from a distance you might think that I was in heaven. I didn’t feel like I was in heaven as a solitary fly methodically explored the back of my hand and several more buzzed dangerously close to my face. A question came to mind: in this moment what would actually happen if I did nothing and allowed EVERYTHING to be exactly as it is? I began conducting my experiment.
  
  First things first – what was my actual experience in this moment?
  
  I was tired. Fine, allow that to be as it is. Don’t resist it or ignore it or try to change it. You’re tired. Don’t even intentionally explore the experience of being tired.
  
  I noticed some tension in my shoulders and face. Fine, allow there to be tension in your shoulders. That’s the way it is right now.
  
  I noticed an urge to relax my shoulders. Fine, allow that urge to just be there. Don’t follow the urge, don’t resist the urge, just acknowledge it.
  
  I noticed a recurring thought – “when will the next bloody fly land on my face!” Fine, allow that thought to be there. Don’t cling to the thought, don’t push it away, don’t try to change it.
  
  I noticed the tension in my shoulders softened a little bit as if by itself. Fine, I just noticed that feeling of relaxation.
  
  I noticed more thoughts – “ok Barry, you might feel more relaxed now but just wait until the next fly lands on your face, you’ll be back to square one!” Same approach. Allow the thoughts to just be there. Let them come and let them go. Don’t interfere. Don’t analyse.
  
  I noticed the fly which had been meandering on my hand suddenly take flight and a moment later land on my cheek. This was it! What would happen if I just allowed that fly to be there on my face?
  
  I noticed all kinds of things. I noticed a feeling excitement, as if I was a scientist reaching the pivotal moment of his experiment. Fine, allow that feeling of excitement to be there. The initial tiredness I felt at the start was gone.
  
  I noticed very intense, unpleasant sensations on my face as the fly moved around. Fine, allow those sensations to be there.
  
  I noticed thoughts telling me how I “should” react to the fly with imperturbable equanimity. Fine, more thoughts. Don’t try to stop them. Let them be there.
  
  I noticed other thoughts telling me to abandon this stupid experiment and try to whack the fly… even if that meant slapping myself in the face! Fine, allow those thoughts to be there.
  
  As I followed this unfolding series of experiences an interesting thing happened. The fly was still on my face but because the focus of my practice was simply exploring what would happen if I allowed it and everything else to be there exactly as it was, there was a natural softening. Whatever happened was fine. If I felt irritation about the fly…fine. If I felt acceptance about the fly…fine. There was no longer any effort, just awareness.
  
  I started to notice other things which I had not been aware of before. I could hear the steady sound of the river flowing. I could feel the subtle change in temperature on my skin as the wind increased in intensity and then stopped. I was aware of the weight of my body and the contact between my body and the earth. The fly was no longer the focus of my attention. Whatever I was aware of, the approach was the same. Let it be exactly as it is. There was a naturally occurring state of peace and deep stillness. If I had tried I could never have experienced this. It didn’t last. It never does. As always some random thought about the past or the future came along and carried me away from the present moment. I was lost in a daydream for a while. No longer aware of my experience.
  
  What brought me back to the present moment?
  
  The familiar feeling of a fly landing on my face. Except this time my natural response was to smile: “thank you for reminding me to bring my attention back to the present Mr Fly”! I noticed the feeling of gratitude and appreciation. The sensations were no longer unpleasant. With each movement the fly was reminding me to stay here with my present moment experience. That fly was my teacher. Nature was my teacher.
  
  So you’ve read this short story. More words. More intellectual ideas. Maybe you agree and you have decided to accept the idea or maybe you disagree and have decided to reject the idea. It doesn’t matter. An intellectual understanding of something is not the same as a lived experience.  Trust me… you need to find out for yourself. Carry out your own experiment. Sit quietly under a tree and see what happens when you allow EVERYTHING to be exactly as it is.
  
  Note: I feel that it’s important to clarify that I’m not advocating apathy and passive acceptance as a life philosophy here! We are all agents of change in our environment and the choices we make and the actions we take (to a large extent) shape our experience and the world in which we live. Living a conscious life is about taking wise action where necessary and sometimes making difficult choices. If we just allowed everything in life to be exactly as it is without ever trying to consciously influence things, it would be an abdication of responsibility as a human being. However, there are still certain things which are completely beyond our control (especially in the short term). When something is completely beyond your control see for yourself which causes you more suffering… resistance or allowing it to be as it is?`, heading:"Nature is a teacher What happens when you allow everything to be 'as it is?'", summary:"A number of years ago I went on holiday to a beautiful part of Portugal. We stayed in a converted farmhouse in the middle of a national park. The farmhouse was in a valley. We arrived in the evening when the birds were just starting to roost. It was still warm and the air smelled…"},
  {picture:"https://motionarray.imgix.net/preview-109213-9FT2hfCn5w-high_0004.jpg", moredetails:``, heading:"The hug of homecoming: Hedonism in the natural world", summary:"“Nature is not a place to visit. It is home.” Gary Snyder In a very real sense, mountains and valleys, the seas and the skies, the sun and the earth, the trees and the flowers constitute our home, our natural habitat. Growing up in the modern developed world we can easily come to believe…"},
  {picture:"https://cdn.shopify.com/s/files/1/0326/7189/articles/mother-trees-blog_2000x.jpg?v=1617381126", moredetails:``,heading:"Earth's intelligence: Being pulled toward the heart of the world", summary:"How surely gravity law, strong as an ocean current, takes hold of even the strongest thing and pulls it toward the heart of the world. Each thing- each stone, blossom, child – is held in place. Only we, in our arrogance, push out beyond what we belong to for some empty freedom. If we surrendered…"},
  {picture:"https://w0.peakpx.com/wallpaper/62/191/HD-wallpaper-superb-river-view-tree-mountains-river-sky-meadow.jpg", moredetails:``,heading:"Connecting with nature: The practice of 'wind-watching'", summary:"The world is animated by the wind. This invisible, mysterious force can bring a landscape alive. Its absence can cast a calm stillness over the earth. On barren mountain tops its power is barely perceptible; in forests and seas its presence becomes manifest. Winds are wild, and sometimes destructive. When we look deeply into the…"},
  {picture:"https://c4.wallpaperflare.com/wallpaper/955/500/1010/tree-sun-light-summer-forest-wallpaper-preview.jpg", moredetails:``,heading:"Nature is a teacher Just sit quietly under a tree", summary:"As I sit outside under an old plane tree that I know very well, I get the sense that summer is slowly coming to a close. A feeling accompanies this realisation. A sinking, uncomfortable feeling that I know all too well. It is the same feeling that comes on Sunday evenings as another week in…"},
  {picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-w_XH_BVJ7ATY0mn-YhzPBiwGDsQs_xrEnKThmz3uPnzT1d0NF57Z-GarJ_CyYtXatsY&usqp=CAU", moredetails:``,heading:"Seeing with “fresh eyes” - A deeper nature experience", summary:"Around the time I first learned how to meditate, something amazing happened to me. It happened one day, quite spontaneously.  I was working as a lawyer at the time and I used to walk down a little lane way to the train station on my commute to work. It's not an especially beautiful lane way …"},
  {picture:"https://data.1freewallpapers.com/download/sea-coast-purple-flowers-green-grass-leaves-field-ocean-waves-during-sunset-nature.jpg", moredetails:``,heading:"Nature Connection Exercise - Perceive and Receive", summary:"For this exercise find a place, any place, with some nature present (which, let’s face it, is anywhere and everywhere; the air you are breathing right now, even the body with which you perceive the world is part of 'nature'). In this practice, we begin by honing our powers of perception. Imagine you have just…"},
  {picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkAypk-aiH7Zbts8sgU_Or78Sa1uPpkitVP3t10SVmbYDoZ0j89cga9HtAEUO-NvvblBY&usqp=CAU", moredetails:``,heading:"Trying and searching and wanting", summary:"I am sitting on my balcony. It is spring and there is a little bit of heat in the sun. The balcony looks out over a road. The road is usually busy… an endless stream of trucks and cars but right now there is no traffic. Everyone is self-isolating. The machine has stopped. It feels…"}
]
const [content, setContent] = useState(INITIAL_BLOGS)


const links = [{link:"http://www.huffingtonpost.com/entry/this-is-your-brain-on-nature_us_55bf98fee4b0b23e3ce35d99"},
{link:"http://ngm.nationalgeographic.com/2016/01/call-to-wild-text"},
{link:"https://www.youtube.com/watch?v=BiXrRK-yrfA"},
{link:"http://uk.businessinsider.com/scientific-benefits-of-nature-outdoors-2016-4?r=US&IR=T/#3-stress-relief-3"},
{link:"http://www.nytimes.com/2010/07/06/health/06real.html"},
{link:"http://www.davidsuzuki.org/media/news/2013/07/report-confirms-daily-dose-of-nature-boosts-happiness-wellbeing/"},
{link:"http://health.usnews.com/health-news/family-health/heart/articles/2008/06/23/time-in-the-sun-how-much-is-needed-for-vitamin-d"},
{link:"http://www.mnn.com/health/fitness-well-being/stories/study-nature-inspires-more-creative-minds"},
{link:"http://www.rochester.edu/news/show.php?id=3639"},
{link:"http://www.dec.ny.gov/lands/90720.html"},
]

  const history = useHistory();
  const [mode, setMode] = useState("dark");
const darkTheme = createTheme({
  palette: {
    mode: mode,
  },
});
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper elevation={1} style={{borderRadius:"0px",minHeight:"100vh", margin:"0px"}}>
    <div className="App">
    
     <AppBar position="static">
       <Toolbar>
       <Button varient="text" color="success" ><ParkOutlinedIcon/> NATURE</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/")}>Home</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/bloglist")}>Blogs</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/addblogs")}>Add blog</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/resources")}>Resources</Button>
       <Button varient="text" color="inherit" style={{marginLeft:"auto"}} onClick={()=>setMode(mode==="light"? "dark":"light")}> {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} {mode==="light"? "Dark":"Light"}Mode</Button>
       </Toolbar>
       </AppBar>

       <Switch>
      
      <Route exact path="/">
      < Home/>
        </Route>
       
        <Route path="/addblogs">
          <AddBlogs />
        </Route>
        <Route path="/resources">
          <Resources links={links}/>
        </Route>

        {/* <Route path="/movielist/edit/:id">
        <EditMovie movies={movies} setMovies={setMovies}/>
        </Route> */}

        <Route path="/bloglist/:id">
        <BlogMoreDetails content={content}/>
        </Route>

        <Route path="/bloglist">
        <Blogs content={content} setContent={setContent}/>
        </Route>

        <Route path="**">
          <NotFound/>
        </Route>

      </Switch>
    </div>
    </Paper>
    </ThemeProvider>
  );
}
export default App;

function Home(){
  const INITIAL_NATURE = [{picture:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/schwarzwald-black-forest-landscape-germany-matthias-hauser.jpg"},
{picture:"https://images.pexels.com/photos/327394/pexels-photo-327394.jpeg"},
{picture:"https://c4.wallpaperflare.com/wallpaper/162/564/930/flowers-hd-wallpapers-hd-images-download-7530-wallpaper-preview.jpg"},
{picture:"https://c4.wallpaperflare.com/wallpaper/366/746/415/waterfall-krang-suri-falls-india-asia-wallpaper-preview.jpg"}];
  return(
    <div>
      <Header/>
    <h1 className="welcome">Welcome to Nature in mind</h1>
    <h3 className="welcome1">We help people improve their health and well-being through mindful engagement with nature</h3>
    <p className="welcome2">Nature in mind is an educational organization that aims to help people improve their health and well-being through mindfully connecting with the natural world. We run workshops, courses, tours, and retreats in which we use a mindfulness-based approach to explore the beauty of the natural world.</p>
    <Sample INITIAL_NATURE={INITIAL_NATURE}/>
    <Footer/>
    </div>
  );
}

function Sample({INITIAL_NATURE}){
  return(
    
      <div className='nature-flex'>
       {INITIAL_NATURE.map(({ picture }) => (<Details
        picture={picture}
        />
      ))}
    </div>
   
  );
}

function Details({ picture }) {
  return (
            <div >
              <img className="nature-image" src={picture} alt="nature" />
            </div>
  );
}

function Blogs({content}){
  return(
    <div>
      <h1 className='blog-title'>Blogs</h1>
      {content.map(({picture, heading, summary},index)=>(<Bdetails 
      picture={picture}
      heading={heading}
      summary={summary}
      id={index}
      />
      ))}
      <Footer/>
    </div>
  );
}


function Bdetails({picture, heading, summary, id}){
  const history = useHistory();
  return(
    <div className='blog-display'>
      <div className='blog-flex'>
      <img className="blog-pic" src={picture} alt={heading}/>
      <div className='blog-like-icon'>
      <p className='blog-folder-icon'><FolderOpenIcon/> Blog</p>
      <Like />
      </div>
      <h2 className='blog-heading'>{heading}</h2>
      <p className='blog-summary'>{summary}</p>
      <Button onClick={()=>{console.log(id);
        history.push("/bloglist/"+id);
        }} color="info" aria-label="more-info">
        read more
</Button>
      </div>
    </div>
  );
}

function BlogMoreDetails({content}){
  const history = useHistory();
  const {id} = useParams();
  const blogdet = content[id]; 
  console.log(blogdet);
  return(
    <div className="details">
    <img className="blog-pic-moredet" src={blogdet.picture} alt={blogdet.heading}/>
    <h2 className='blog-heading'>{blogdet.heading}</h2>
    <div className='blog-moredetails-flex'>
    <h4 className='blog-moredetails'>{blogdet.moredetails}</h4>
    <Button onClick={()=>history.push("/bloglist") }variant="outlined"><KeyboardBackspaceIcon/>Back</Button>
    </div>
      
      <Footer />
       </div>
        );
}

function AddBlogs(){
  // const history = useHistory();

const [pic, setPic] = useState("");
const [heading, setHeading] = useState("");
const [summary, setSummary] = useState("");

// const addMovie =()=>{
//   const newMovies= {pic, heading, summary};//shorthand
//   setMovies([...movies,newMovies]);
//   history.push("/movielist");
// };
  return(
    <div className="add-blogs">

    <TextField value={pic} 
          onChange={(event)=>setPic(event.target.value)}  label="enter url" variant="filled" />
         
         <TextField value={heading}
          onChange={(event)=>setHeading(event.target.value)} label="enter blog name" variant="filled" />
    
          <TextField value={summary}
          onChange={(event)=>setSummary(event.target.value)}  label="enter blog summary" variant="filled" />
        
          <Button  variant="contained">Add Blogs</Button>
         
        </div>
  );
}


function Resources({links}){
  return(
    <div>
        <h2 className='reso-head'>Resources</h2>
      <h1 className='reso-link'>Links</h1>
      {links.map(({link})=>(<ResourcesDet link={link}/>))}
      <Footer/>
    </div>
  );
}

function ResourcesDet({link}){
  return(
    <div className='link-design'>
      <a className='link-color' rel="noreferrer" target="_blank" href={link}>{link}</a>
    </div>
  );
}

function Like(){
  const [like, setLike] = useState(true)
  return(
    <div>
      <IconButton onClick={()=>setLike(!like)} color="secondary" aria-label="description">{like?<FavoriteBorderIcon/>:<FavoriteIcon/>}</IconButton>
    </div>
  );
}

function NotFound(){
  return(
    <div>
      <img src="https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Page.gif" alt="notfound"/>
    </div>
  );
}

function Header(){
  return(
    <div className='header-design'></div>
  );
}



function Footer(){
  return(
    <div className='footer-design'>
      <h1 className='copyright'>Copyright © 2022 | Nature</h1>
    </div>
  );
}