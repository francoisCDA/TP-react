import { useContext} from 'react';
import { Level } from '../contexts/level';
import { Button, Text, Flex } from '@radix-ui/themes';

const Reglages = () => {

    const [level,setLevel] = useContext(Level);

    const setNbEssaisInc = () => {
        let nextLevel = {...level};
        if (nextLevel.nbEssais < 16 ) {nextLevel.nbEssais++;}
        setLevel(nextLevel);
    }

    const setNbEssaisDec = () => {
        let nextLevel = {...level};
        if (nextLevel.nbEssais > 5 ) {nextLevel.nbEssais--;}
        setLevel(nextLevel);
    }

    const setLgSequenceInc = () => {
        let nextLevel = {...level};
        if (nextLevel.lgSequence < 9 ) {nextLevel.lgSequence++;}
        setLevel(nextLevel);
    }

    const setLgSequenceDec = () => {
        let nextLevel = {...level};
        if (nextLevel.lgSequence > 4 ) {nextLevel.lgSequence--;}
        setLevel(nextLevel);
    }

    const setNbCouleursInc = () => {
        let nextLevel = {...level};
        if (nextLevel.nbCouleurs < 12 ) {nextLevel.nbCouleurs++;}
        setLevel(nextLevel);
    }

    const setNbCouleursDec = () => {
        let nextLevel = {...level};
        if (nextLevel.nbCouleurs > 5 ) {nextLevel.nbCouleurs--;}
        setLevel(nextLevel);
    }
    
    return(


        <Flex className='justify-around'>
            <Flex direction="column">
                <Button size="4" variant='surface' className='rounded-b-none mt-3' onClick={setNbEssaisInc}><svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 1C7.66148 1 7.81301 1.07798 7.90687 1.20938L12.9069 8.20938C13.0157 8.36179 13.0303 8.56226 12.9446 8.72879C12.8589 8.89533 12.6873 9 12.5 9H10V11.5C10 11.7761 9.77614 12 9.5 12H5.5C5.22386 12 5 11.7761 5 11.5V9H2.5C2.31271 9 2.14112 8.89533 2.05542 8.72879C1.96972 8.56226 1.98427 8.36179 2.09314 8.20938L7.09314 1.20938C7.18699 1.07798 7.33853 1 7.5 1ZM3.4716 8H5.5C5.77614 8 6 8.22386 6 8.5V11H9V8.5C9 8.22386 9.22386 8 9.5 8H11.5284L7.5 2.36023L3.4716 8Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></Button>
                <Text className=' bg-neutral-300 py-4' size="8" align="center" as="div" weight="bold">{level.nbEssais}</Text>
                <Button size="4" variant='surface' className='mb-3 rounded-t-none' onClick={setNbEssaisDec}><svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 3.5C5 3.22386 5.22386 3 5.5 3H9.5C9.77614 3 10 3.22386 10 3.5V6H12.5C12.6873 6 12.8589 6.10467 12.9446 6.27121C13.0303 6.43774 13.0157 6.63821 12.9069 6.79062L7.90687 13.7906C7.81301 13.922 7.66148 14 7.5 14C7.33853 14 7.18699 13.922 7.09314 13.7906L2.09314 6.79062C1.98427 6.63821 1.96972 6.43774 2.05542 6.27121C2.14112 6.10467 2.31271 6 2.5 6H5V3.5ZM6 4V6.5C6 6.77614 5.77614 7 5.5 7H3.4716L7.5 12.6398L11.5284 7H9.5C9.22386 7 9 6.77614 9 6.5V4H6Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></Button>
            </Flex>
            <Flex direction="column" >
                <Button size="4" variant='surface' className='rounded-b-none mt-3' onClick={setLgSequenceInc}><svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 1C7.66148 1 7.81301 1.07798 7.90687 1.20938L12.9069 8.20938C13.0157 8.36179 13.0303 8.56226 12.9446 8.72879C12.8589 8.89533 12.6873 9 12.5 9H10V11.5C10 11.7761 9.77614 12 9.5 12H5.5C5.22386 12 5 11.7761 5 11.5V9H2.5C2.31271 9 2.14112 8.89533 2.05542 8.72879C1.96972 8.56226 1.98427 8.36179 2.09314 8.20938L7.09314 1.20938C7.18699 1.07798 7.33853 1 7.5 1ZM3.4716 8H5.5C5.77614 8 6 8.22386 6 8.5V11H9V8.5C9 8.22386 9.22386 8 9.5 8H11.5284L7.5 2.36023L3.4716 8Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></Button>
                <Text className=' bg-neutral-300 py-4' size="8" align="center" as="div" weight="bold">{level.lgSequence}</Text>
                <Button size="4" variant='surface' className='mb-3 rounded-t-none' onClick={setLgSequenceDec}><svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 3.5C5 3.22386 5.22386 3 5.5 3H9.5C9.77614 3 10 3.22386 10 3.5V6H12.5C12.6873 6 12.8589 6.10467 12.9446 6.27121C13.0303 6.43774 13.0157 6.63821 12.9069 6.79062L7.90687 13.7906C7.81301 13.922 7.66148 14 7.5 14C7.33853 14 7.18699 13.922 7.09314 13.7906L2.09314 6.79062C1.98427 6.63821 1.96972 6.43774 2.05542 6.27121C2.14112 6.10467 2.31271 6 2.5 6H5V3.5ZM6 4V6.5C6 6.77614 5.77614 7 5.5 7H3.4716L7.5 12.6398L11.5284 7H9.5C9.22386 7 9 6.77614 9 6.5V4H6Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></Button>
            </Flex>
            <Flex direction="column" >
            <Button size="4" variant='surface' className='rounded-b-none mt-3' onClick={setNbCouleursInc}><svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 1C7.66148 1 7.81301 1.07798 7.90687 1.20938L12.9069 8.20938C13.0157 8.36179 13.0303 8.56226 12.9446 8.72879C12.8589 8.89533 12.6873 9 12.5 9H10V11.5C10 11.7761 9.77614 12 9.5 12H5.5C5.22386 12 5 11.7761 5 11.5V9H2.5C2.31271 9 2.14112 8.89533 2.05542 8.72879C1.96972 8.56226 1.98427 8.36179 2.09314 8.20938L7.09314 1.20938C7.18699 1.07798 7.33853 1 7.5 1ZM3.4716 8H5.5C5.77614 8 6 8.22386 6 8.5V11H9V8.5C9 8.22386 9.22386 8 9.5 8H11.5284L7.5 2.36023L3.4716 8Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></Button>
                <Text className=' bg-neutral-300 py-4' size="8" align="center" as="div" weight="bold">{level.nbCouleurs}</Text>
                <Button size="4" variant='surface' className='mb-3 rounded-t-none' onClick={setNbCouleursDec}><svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 3.5C5 3.22386 5.22386 3 5.5 3H9.5C9.77614 3 10 3.22386 10 3.5V6H12.5C12.6873 6 12.8589 6.10467 12.9446 6.27121C13.0303 6.43774 13.0157 6.63821 12.9069 6.79062L7.90687 13.7906C7.81301 13.922 7.66148 14 7.5 14C7.33853 14 7.18699 13.922 7.09314 13.7906L2.09314 6.79062C1.98427 6.63821 1.96972 6.43774 2.05542 6.27121C2.14112 6.10467 2.31271 6 2.5 6H5V3.5ZM6 4V6.5C6 6.77614 5.77614 7 5.5 7H3.4716L7.5 12.6398L11.5284 7H9.5C9.22386 7 9 6.77614 9 6.5V4H6Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></Button>
            </Flex>
        </Flex>

    )
}

export default Reglages