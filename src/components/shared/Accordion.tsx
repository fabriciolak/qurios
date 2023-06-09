import * as AccordionRadix from "@radix-ui/react-accordion";
import { styled } from "../../styles";
import React from "react";
// import { ChevronDownIcon } from "lucide-react";

export function Accordion() {
  return (
    <>
      <AccordionRoot type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span>1</span>
            Quantos amigos posso adicionar no app?
          </AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span>1</span>
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span>1</span>
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>

      </AccordionRoot>
    </>
  )
}

const AccordionRoot = styled(AccordionRadix.Root, {
  width: '100%',
  height: '100%',
  border: '1px solid',
})

const AccordionItem = styled(AccordionRadix.Item, {
  width: '100%',
  height: '130px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  borderBottom: '2px solid $gray-light',
  overflow: 'hidden',
  marginTop: 1,

  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  '&:last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: `0 0 0 2px red`,
  },
});

interface AccordionTriggerProps {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
    </StyledTrigger>
  </StyledHeader>
));

const AccordionContent = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    <StyledContentText>{children}</StyledContentText>
  </StyledContent>
));

const StyledHeader = styled(AccordionRadix.Header, {
  all: 'unset',
  width: '100%',
  display: 'flex',
});

const StyledTrigger = styled(AccordionRadix.Trigger, {
  all: 'unset',
  backgroundColor: 'transparent',
  padding: '0 20px',
  // height: '90px',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  
  fontFamily: '$sora',
  fontSize: '1.25rem',
  fontWeight: 700,
  lineHeight: '1.625rem',
  color: '$title',

  boxShadow: `0 1px 0 red`,
  // '&:hover': { backgroundColor: 'red' },
  cursor: 'pointer',

  'span': {
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: '2.25rem',
    color: '$purple-dark',
    marginRight: '3rem'
  }
});

const StyledContent = styled(AccordionRadix.Content, {
  overflow: 'hidden',
  fontSize: 15,
  color: mauve.mauve11,
  backgroundColor: mauve.mauve2,

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const StyledContentText = styled('div', {
  padding: '15px 20px',
});