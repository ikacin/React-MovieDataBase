import { Button } from '@mantine/core';

const CustomButton = ({variant,size}) => {

    return <Button
            variant={variant ?? "filled"}
            size={size ?? "md"}
    >Button</Button>;
}

export default CustomButton