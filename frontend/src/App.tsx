import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Landing from './Pages/Home';
import Login from './Pages/Auth';
import Journal from './Pages/JournalList/JournalList';
import LogEntry from './Pages/JournalEntry/JounralEntry';
import Dashboard from './Pages/Dashboard';
import Layout from './components/Layout/Layout';
import Errorpage from './Pages/ErrorPage/ErrorPage';

function App() {
	return (
		<div className='App'>
			<Layout>
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='/login' element={<Login />} />
					<Route path='/user/:username/dashboard' element={<Dashboard />} />
					<Route path='/user/:username/journal' element={<Journal />} />
					<Route path='/user/:username/journal/log/create' element={<LogEntry />} />
					<Route path='/user/:username/journal/log/:id' element={<LogEntry />} />
					<Route path='*' element={Errorpage} />
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
