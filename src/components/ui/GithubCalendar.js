import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {
    const violetTheme = {
        light: ["#E5D9F2", "#C7A2C5", "#A567BD", "#7A35A7", "#52008D"],
        dark: ["#2D132C", "#512B58", "#85598C", "#A280A0", "#C7A2C5"],
      };
    
      return (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h2 style={{ color: "#A567BD" }}>GitHub Contributions</h2>
          <GitHubCalendar
            username="YOUR_GITHUB_USERNAME"
            blockSize={12}
            blockMargin={4}
            colorScheme="dark"
            theme={violetTheme}
            showWeekdayLabels
          />
        </div>
      );
}

export default GithubCalendar
