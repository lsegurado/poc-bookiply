import { render, RenderResult } from "@testing-library/react";
import { Header } from ".";
import { property } from "../../constants/property";

const { id, name, background } = property;
describe('Header component', () => {
    let el: RenderResult;
    beforeEach(() => {
        el = render(<Header />);
    })
    it(`should match snapshot`, () => {
        expect(el.container).toMatchSnapshot();
    })
    it(`should render a header container`, () => {
        expect(el.getByRole('banner').tagName).toEqual('HEADER');
    })
    it(`should render id`, () => {
        expect(el.getByText(`ID: ${id}`)).toBeDefined();
    })
    it(`should render title`, () => {
        expect(el.getByText(name)).toBeDefined();
    })
    it(`should render background`, () => {
        expect(el.getByRole('img')).toBeDefined();
        expect(el.getByRole('img').getAttribute('src')).toEqual(background);
    })
});