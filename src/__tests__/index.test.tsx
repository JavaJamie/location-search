import { render, screen } from '@testing-library/react';
import App from "../../pages/index";

/**
 * A basic test to render the app.
 */
it("renders App without crashing", () => {
    render(<App />);
    expect(screen.getByText('Location search')).toBeInTheDocument();
});