import { render, screen } from '@testing-library/react';
import App from "../../pages/index";

it("renders App without crashing", () => {
    render(<App />);
    expect(screen.getByText('Location search')).toBeInTheDocument();
});