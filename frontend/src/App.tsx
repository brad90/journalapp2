import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Landing from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Journal from './Pages/JournalList/JournalList';
import LogEntry from './Pages/JournalEntry/JounralEntry';
import Dashboard from './Pages/Dashboard/Dashboard';
import Layout from './components/Layout/Layout';
import Errorpage from './Pages/ErrorPage/ErrorPage';

function App() {
	return (
		<div className='App'>
			<Layout>
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='/login' element={<Login />} />
					<Route path='/user/:userid/dashboard' element={<Dashboard />} />
					<Route path='/user/:userid/journal' element={<Journal />} />
					<Route path='/user/:userid/journal/log/create' element={<LogEntry />} />
					<Route path='/user/:userid/journal/log/:id' element={<LogEntry />} />
					<Route path='*' element={Errorpage} />
				</Routes>
			</Layout>
		</div>
	);
}

export default App;