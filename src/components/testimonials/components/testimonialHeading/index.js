import { Heading } from '@chakra-ui/react'

const TestimonialHeading = (props) => {
    const { children } = props

    return (
        <Heading as={'h3'} fontSize={'xl'} className='poppins-regular'>
            {children}
        </Heading>
    )
}

export default TestimonialHeading