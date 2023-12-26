import { Loader } from '@mantine/core';

const Load = ({color,size}) => {
    return <Loader
        color="red"
        size={size ?? 30}
    />;
}

export default Load