import React from 'react';
import '../css/searchPage.css'
import TuneIcon from '@mui/icons-material/Tune';
import Image from '../Asset/thumbnail.jpeg'
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

export default function SearchBar() {
  return (
    <div className='searchPage'>
        <div className='searchPage__filter'>
            <TuneIcon />
            <h2>FILTER</h2>
        </div>
        <br/>
        <hr></hr>
        <br/>
        <ChannelRow
            image={Image}
            Channel="Abhishek Singh"
            verified
            sub="659K"
            noOfVideos={382}
            description="You can find awsome programming lesson here! Also expect programming tips and tricks that will take your coding skills ..."
        />
        <br></br>
        <hr></hr>
        <br/> 
        <VideoRow 
        views="1.4M"
        subs="659k"
        description="You can find awsome programming lesson here! Also expect programming tips and tricks that will take your coding skills ..."
        timestamp="59 second ago"
        channel="Abhishek Singh"
        title="Become a web developer in 10 min | 2019/2020"
        image="https://i.insider.com/5d570cfbcd9784776827f9b8?width=1136&format=jpeg" />

        <VideoRow 
        views="1.4M"
        subs="659k"
        description="You can find awsome programming lesson here! Also expect programming tips and tricks that will take your coding skills ..."
        timestamp="59 second ago"
        channel="Abhishek Singh"
        title="Become a web developer in 10 min | 2019/2020"
        image="https://i.insider.com/5d570cfbcd9784776827f9b8?width=1136&format=jpeg" />

        <VideoRow 
        views="1.4M"
        subs="659k"
        description="You can find awsome programming lesson here! Also expect programming tips and tricks that will take your coding skills ..."
        timestamp="59 second ago"
        channel="Abhishek Singh"
        title="Become a web developer in 10 min | 2019/2020"
        image="https://i.insider.com/5d570cfbcd9784776827f9b8?width=1136&format=jpeg" />

        <VideoRow 
        views="1.4M"
        subs="659k"
        description="You can find awsome programming lesson here! Also expect programming tips and tricks that will take your coding skills ..."
        timestamp="59 second ago"
        channel="Abhishek Singh"
        title="Become a web developer in 10 min | 2019/2020"
        image="https://i.insider.com/5d570cfbcd9784776827f9b8?width=1136&format=jpeg" />

        <VideoRow 
        views="1.4M"
        subs="659k"
        description="You can find awsome programming lesson here! Also expect programming tips and tricks that will take your coding skills ..."
        timestamp="59 second ago"
        channel="Abhishek Singh"
        title="Become a web developer in 10 min | 2019/2020"
        image="https://i.insider.com/5d570cfbcd9784776827f9b8?width=1136&format=jpeg" />

        <VideoRow 
        views="1.4M"
        subs="659k"
        description="You can find awsome programming lesson here! Also expect programming tips and tricks that will take your coding skills ..."
        timestamp="59 second ago"
        channel="Abhishek Singh"
        title="Become a web developer in 10 min | 2019/2020"
        image="https://i.insider.com/5d570cfbcd9784776827f9b8?width=1136&format=jpeg" />

        <VideoRow 
        views="1.4M"
        subs="659k"
        description="You can find awsome programming lesson here! Also expect programming tips and tricks that will take your coding skills ..."
        timestamp="59 second ago"
        channel="Abhishek Singh"
        title="Become a web developer in 10 min | 2019/2020"
        image="https://i.insider.com/5d570cfbcd9784776827f9b8?width=1136&format=jpeg" />

        <VideoRow 
        views="1.4M"
        subs="659k"
        description="You can find awsome programming lesson here! Also expect programming tips and tricks that will take your coding skills ..."
        timestamp="59 second ago"
        channel="Abhishek Singh"
        title="Become a web developer in 10 min | 2019/2020"
        image="https://i.insider.com/5d570cfbcd9784776827f9b8?width=1136&format=jpeg" />

        <VideoRow 
        views="1.4M"
        subs="659k"
        description="You can find awsome programming lesson here! Also expect programming tips and tricks that will take your coding skills ..."
        timestamp="59 second ago"
        channel="Abhishek Singh"
        title="Become a web developer in 10 min | 2019/2020"
        image="https://i.insider.com/5d570cfbcd9784776827f9b8?width=1136&format=jpeg" />
    </div>
  )
}
