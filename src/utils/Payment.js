import styled from "styled-components";

export const HeadWrapper = styled.div`
    & h1 {
        font-size: 40px;
        font-family:'Courier New', Courier, monospace ;

    }
    @media (max-width: 900px) {
        h1{
            font-size: 30px;
        }
    }
`
export const LineWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 70%;
    margin: auto;
    margin-top: 30px;
    @media (max-width: 900px) {
        p{
            display: none;
        }
    }
`
export const FormWrapper = styled.div`
    display: grid;
    align-items: left;
    width: 50%;
    
    & input{
        margin-top:20px;
        padding: 10px;
    }
    & form {
        display: grid;
        margin:auto;
        
    }

    & select {
        width: 508px;
        padding: 10px;
        margin-top: 20px;
    }
    & button {
        padding: 8px 80px;
        cursor: pointer;
        background-color: black;
        color: white;
        margin-top: 30px;
    }
    @media (max-width: 1000px) {
        & input{
        width: 250px;
        padding:5px;
        margin-left: 20px;
        }
        & select {
        width: 258px;
        padding: 5px;
        margin-left: 20px;
        }
        & button {
         width: 300px;
         padding: 10px;
        cursor: pointer;
        background-color: black;
        color: white;
        margin-top: 30px;
        }
    }
    
`

// export const FormWrapper2 = styled.div`
//     display: grid;
//     align-items: left;
//     width: 50%;

//     & input{
//         margin-top:20px;
//         padding: 10px;
//     }
//     & form {
//         display: grid;
//         margin:auto;

//     }

//     & select {
//         width: 508px;
//         padding: 10px;
//         margin-top: 20px;
//     }
//     @media (max-width: 900px) {
//         & input{
//         width: 250px;
//         padding:5px;
//         margin-left: 20px;
//         }
//         & select {
//         width: 258px;
//         padding: 5px;
//         margin-left: 20px;
//     }
//     }

// `
export const BillingWrapper = styled.div`
    width: 50%;

     & p {
        text-align: left;
        padding-left:30px;
    }
    & button {
        
        padding: 8px 40px;
        cursor: pointer;

    } 

`
export const Vertical = styled.div`
    border-left: 1px solid black;
  height: 800px;
  position: absolute;
  left: 50%;
  margin-top:170px;
  margin-left: -3px;
  top: 0;
  @media (max-width: 800px){
    & Vertical{
        
    }
  }
`


export const Details = styled.div`
    width: 45%;
    height: 10px;
    
`
export const Wrapper = styled.div`
    display: flex;
`

export const ButtonWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin:auto;
    & button:nth-child(1) {
        padding: 8px 80px;
        cursor: pointer;
    }

`

