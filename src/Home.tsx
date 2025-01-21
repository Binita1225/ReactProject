import { useState } from "react"

const Home1 = () => {
    const [myName, setMyName] = useState("Uttam")


    const clickFunction = () => {
        setMyName('Uttam Magaju')
    }

    return (
        <div onClick={clickFunction}>
            <Name passedName={myName} />
        </div>
    )
}

export const Name = ({ passedName }: any) => {

    return (
        <div>
            My Name is {passedName}
        </div>
    )
}

export default Home1