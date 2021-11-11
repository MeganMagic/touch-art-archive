import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
    BrowserRouter,
    Routes, 
    Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { languageStore } from './language'

import Main from './routes/Main';
import Artwork from './routes/Artwork';
import Archive from './routes/Archive';
import PageNotFound from './routes/PageNotFound';

import { getData } from './data/useData';
import { KOREAN, WESTERN, RegionWestern, RegionKorean } from './variables';

ReactDOM.render(
    <Provider store={languageStore}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>

                    <Route path="" element={<Main />} />
                    <Route path="archive" >
                        <Route path="western" element={<Archive region={RegionWestern} artworks={getData(WESTERN)}/>} />
                        <Route path="korean" element={<Archive region={RegionKorean} artworks={getData(KOREAN)}/>} />
                    </Route>
                    
                    <Route path="artwork/:artworkId" element={<Artwork />} />

                </Route>

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));