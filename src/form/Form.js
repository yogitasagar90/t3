import React, { useState } from 'react';
import './Form.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Form() {

  const initValues = {
    header: "",
    sectionDetail: "",
  };

  const [data, setData] = useState(initValues);

  const [section, setSection] = useState([]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection((prev) => [...prev, data]);
    setData(initValues);
  };

  console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='container'>
          <h3 className='head'>Add Section</h3>
          <label className='sh'>Section Header
            <input name='header' value={data.header} type='text' onChange={handleChange} />
          </label>
          <label className='sd'>Section Details
            <textarea name='details' value={data.details} type='text' onChange={handleChange} />
          </label>
          <button className='btn' onClick={handleSubmit}>Add</button>
        </div>
      </form>
      <div className='box'>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography><strong>Section</strong></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ofcia deserunt mollit anim id est
            </Typography>
          </AccordionDetails>
        </Accordion>
        {section?.map((item, i) => {
          return (
            <Accordion sx={{ marginTop: "15px" }} key={i}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{item.header}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.sectionDetail}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </>
  )
}

export default Form
