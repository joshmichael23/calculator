import React from 'react'
import Button from './Button';
import { useState } from 'react';

const Home = () => {

  const [value, setValue] = useState('');

  const [select, setSelect] = useState('0');
  const [theme, setTheme] = useState('main');



  function changeTheme(select){
    if(select == 0){
      setTheme('main')
      
    }else if(select == 1){
      setTheme('theme2')
    }else{
      setTheme('theme3')
    }
  }

  const btnValues = [
    [7, 8, 9, "DEL"],
    [4, 5, 6, "+"],
    [1, 2, 3, "-"],
    [".", 0, "/", "x"],
    ["RESET", "="],
  ];

  return (
    <div className={'wrapper ' + theme}>
      <div className='calc'>
          <div className='calc-top'>
            <h1 className={theme}>calc</h1>
            <div className={'calc-switch ' + theme}>
              <p>THEME</p>
              <div>
                <label htmlFor="">1</label>
                <label htmlFor="">2</label>
                <label htmlFor="">3</label>
              </div>
              <input defaultValue="0" className={theme + ' slider'} type="range" name="" id="" min="0" max="2"
                onChange={(e)=>
                  changeTheme(e.target.value)
                }
              />
            </div>
          </div>
          <div className={'calc-display ' + theme}>
            {value}
          </div>
          <div className={'buttons ' + theme}>


            {
              btnValues.flat().map((btn, i) => {
                return (
                  <Button
                    key={i}
                    className={theme}
                    value={btn}
                    realValue={value}
                    setRealValue={setValue}
                  />
                );
              })
            }

          </div>
      </div>
    </div>
  )
}

export default Home