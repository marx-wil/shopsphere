import { Stack } from '@chakra-ui/react'    
import { useColorModeValue } from '@chakra-ui/react'
const TestimonialContent = (props) => {
    const { children } = props

    return (
        <Stack
            bg={useColorModeValue('#fff', '#1D252C')}
            boxShadow={'2xl'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('#fff', '#1D252C'),
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    )
}

export default TestimonialContent