import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TodoList from './component/TodoList';
import Chart from './component/Chart';

import Homepage from './component/Homepage';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';


function App() {
  return (
    <Router>
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple SPA
          </Typography>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/todo" color="inherit">Todo</Button>
          <Button component={Link} to="/chart" color="inherit">Chart</Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/todo" element={<TodoList/>}/>
        <Route path="/chart" element={<Chart/>}/>
        <Route path="/" element={<Homepage />}/>
      </Routes>
    </div>
  </Router>

  );
}

export default App;
