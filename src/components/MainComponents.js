import {useState} from 'react';
import {Button, Container, makeStyles, Typography} from '@material-ui/core'


const useStyles = makeStyles({
  btn: {
    marginLeft: 1,
    marginBottom: 2
  }
});

function Keys(){
  const css = useStyles();
  const [res, setRes] = useState(0);
  const [currNum, setCurrNum] = useState('');
  const [toShow, setToShow] = useState([]);

  const handelClick = (key)=>{
    if(key === 'C'){
      setRes(0);
      setCurrNum('');
      setToShow([]);
    }
    else if(key === '='){
      let op1 = toShow[0], op2 = toShow[2], opr = toShow[1];
      let out;
      switch(opr){
        case '+':
          out = parseFloat(op1) + parseFloat(op2);
          setRes(out);
          setToShow([]);
          break;
        case '-':
          out = parseFloat(op1) - parseFloat(op2);
          setRes(out);
          setToShow([]);
          break;
        case 'x':
          out = parseFloat(op1) * parseFloat(op2);
          setRes(out);
          setToShow([]);
          break;
        case '/':
          out = parseFloat(op1) / parseFloat(op2);
          setRes(out);
          setToShow([]);
          break;
        case '%':
          out = parseFloat(op1) % parseFloat(op2);
          setRes(out);
          setToShow([]);
          break;
        default:
          break;
      }
    }
    else if(key === '<='){
      let temp = [...toShow];
      temp.pop();
      setRes(toShow[toShow.length-1] && toShow[toShow.length-1]);
      setToShow(temp);
    }
    else if(""+(+key) === key || key === '.'){
      let num = currNum + key;
      let temp = [...toShow];
      if(temp.length === 0){
        temp.push(num);
      } else if(""+(+temp[temp.length-1]) !== temp[temp.length-1] && !temp[temp.length-1].includes('.')){
        temp.push(num);
      } else if(temp[temp.length-1].includes('.')){
        temp[temp.length-1] = num;
      } else{
        temp[temp.length-1] = num;
      }
      setToShow(temp);
      setCurrNum(num);
      setRes(num);
    }
    else{
      let temp = [...toShow, key];
      setToShow(temp);
      setCurrNum('');
      setRes(key);
    }
  }

  let k=0

  return(
    <>
      <>
        { toShow &&
          toShow.map(int =>{
            return(
              <span key={k++}>
                <>{int + " "} </>
              </span>
            );
          })
        }
      </>
      <Container>
      <Typography>{res}</Typography>
      </Container>
      <div>
        <div id="row1">
          <Button className={css.btn} color="secondary" variant="contained" onClick={() => handelClick('C')}>C</Button>
          <Button className={css.btn} color="secondary" variant="contained"  onClick={() => handelClick('%')}>%</Button>
          <Button className={css.btn} color="secondary" variant="contained"  onClick={() => handelClick('<=')}>{'<='}</Button>
          <Button className={css.btn} color="secondary" variant="contained"  onClick={() => handelClick('/')}>/</Button>
        </div>
        <div id="row2">
          <Button className={css.btn} color="secondary" variant="contained"  onClick={() => handelClick('7')}>7</Button>
          <Button className={css.btn} color="secondary" variant="contained"  onClick={() => handelClick('8')}>8</Button>
          <Button className={css.btn} color="secondary" variant="contained"  onClick={() => handelClick('9')}>9</Button>
          <Button className={css.btn} color="secondary" variant="contained"  onClick={() => handelClick('x')}>x</Button>
        </div>
        <div id="row3">
          <Button className={css.btn} color="secondary" variant="contained"  onClick={() => handelClick('4')}>4</Button>
          <Button className={css.btn} color="secondary" variant="contained"  onClick={() => handelClick('5')}>5</Button>
          <Button className={css.btn} color="secondary" variant="contained"  onClick={() => handelClick('6')}>6</Button>
          <Button className={css.btn} color="secondary" variant="contained"  onClick={() => handelClick('-')}>-</Button>
        </div>
        <div id="row4">
          <Button className={css.btn} color="secondary" variant="contained"  onClick={() => handelClick('1')}>1</Button>
          <Button className={css.btn} color="secondary" variant="contained"  onClick={() => handelClick('2')}>2</Button>
          <Button className={css.btn} color="secondary" variant="contained"  onClick={() => handelClick('3')}>3</Button>
          <Button className={css.btn} color="secondary" variant="contained"  onClick={() => handelClick('+')}>+</Button>
        </div>
        <div id="row5">
          <Button className={css.btn} color="secondary" variant="contained"  onClick={() => handelClick('00')}>00</Button>
          <Button className={css.btn} color="secondary" variant="contained"  onClick={() => handelClick('0')}>0</Button>
          <Button className={css.btn} color="secondary" variant="contained"  onClick={() => handelClick('.')}>.</Button>
          <Button className={css.btn} color="secondary" variant="contained"  onClick={() => handelClick('=')}>=</Button>
        </div>
      </div>
    </>
  )
}

function Main(){
  return (
    Keys()
  );
}

export default Main;