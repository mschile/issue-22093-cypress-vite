import Button from './Button';
import { prettyDOM } from "@testing-library/dom";

describe('Button', () => {
  it('should mount', () => {
    cy.mount(<Button>Click Me</Button>);
    cy.document().then((button) => {
      console.log(prettyDOM(button))
    })
  });
});
