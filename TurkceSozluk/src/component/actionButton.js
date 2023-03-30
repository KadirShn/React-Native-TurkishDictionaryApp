import React from "react";
import Button from "./button";
import Text from "./text";

function ActionButton({ children, ...props }) {
  return (
    <Button
    style={{
        shadowColor:'#000',
        shadowOpacity: 0.16,
        shadowRadius:4,
        elevation: 4,
        shadowOffset:{
            width: 0,
            height:1
        }
        
    }}
      borderRadius="full"
      minWidth="actionButton"
      height="actionButton"
      bg="white"
      px={8}
      {...props}
    >
      {children}
    </Button>
  );
}

export function ActionButtonTitle({children, ...props}){
    return <Text color="textLight" fontWeight="bold" ml={6} mr={6} {...props}>{children}</Text>
}

export default ActionButton;
