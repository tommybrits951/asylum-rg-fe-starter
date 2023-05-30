import { getAllByAltText, getByTitle } from '@testing-library/dom';
import { getByAltText, render, screen } from '@testing-library/react';
import RenderLandingPage from '../components/pages/Landing/RenderLandingPage';
describe('Landing page test suite', () => {
  test('Graph images render to page', () => {
    render(<RenderLandingPage />);
    const officeGraph = screen.getByAltText('Grant Rates By Office');
    const nationalityGraph = screen.getByAltText('Grant Rates By Nationality');
    const timeGraph = screen.getByAltText('Grant Rates Over Time');
    expect(officeGraph).toBeInTheDocument();
    expect(nationalityGraph).toBeInTheDocument();
    expect(timeGraph).toBeInTheDocument();
  });
  test('Graph Text Renders', () => {
    render(<RenderLandingPage />);
    const office = screen.getByText('Search Grant Rates By Office');
    const nationality = screen.getByText('Search Grant Rates By Nationality');
    const time = screen.getByText('Search Grant Rates Over Time');
    expect(office).toBeInTheDocument();
    expect(nationality).toBeInTheDocument();
    expect(time).toBeInTheDocument();
  });
  test('Bottom Section Text Renders', () => {
    render(<RenderLandingPage />);
    const leftTitle = screen.getByTitle('left-title');
    const middleTitle = screen.getByTitle('middle-title');
    const rightTitle = screen.getByTitle('right-title');
    expect(leftTitle).toBeInTheDocument();
    expect(middleTitle).toBeInTheDocument();
    expect(rightTitle).toBeInTheDocument();
  });
});
