import LeetCodeCalendar from 'leetcode-calendar';

export default function LeetCodeHeatmap() {
    // const exampleTheme = {
    //   light: [
    //     'rgb(235, 235, 235)',
    //     'rgba(192, 132, 245, 0.44)',
    //     'rgba(192, 132, 245, 0.6)',
    //     'rgba(192, 132, 245, 0.76)',
    //     'rgba(192, 132, 245, 0.92)',
    //   ],
    //   dark: [
    //     'rgb(235, 235, 235)',
    //     'rgba(192, 132, 245, 0.44)',
    //     'rgba(192, 132, 245, 0.6)',
    //     'rgba(192, 132, 245, 0.76)',
    //     'rgba(192, 132, 245, 0.92)',
    //   ],
    // }

    const exampleTheme = {
  light: [
    "rgb(235, 235, 235)", // Base light color
    "rgba(34, 197, 94, 0.44)", // Light Green
    "rgba(34, 197, 94, 0.6)", // Medium Green
    "rgba(34, 197, 94, 0.76)", // Darker Green
    "rgba(34, 197, 94, 0.92)", // Deep Green
  ],
  dark: [
    "rgb(235, 235, 235)", // Dark base color
    "rgba(22, 163, 74, 0.44)", // Dark Light Green
    "rgba(22, 163, 74, 0.6)", // Dark Medium Green
    "rgba(22, 163, 74, 0.76)", // Darker Green
    "rgba(22, 163, 74, 0.92)", // Deepest Green
  ],
};
  
    return (
      <div >
        <LeetCodeCalendar 
          username='Ashutosh_akm' // Replace with your LeetCode username
          blockSize={9} // Optional: Size of each block in pixels (default: 15)
          blockMargin={5} // Optional: Margin between blocks in pixels (default: 5)
          fontSize={12} // Optional: Font size of the text within blocks (default: 16)
          theme={exampleTheme} // Optional: A custom theme object to style the calendar
          style={{color:"white", maxWidth: '1100px' }} // Optional: Inline styles for the calendar container
        />
      </div>
    )
  }