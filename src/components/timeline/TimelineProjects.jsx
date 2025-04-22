import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { Typography, Box, Paper, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { WorkOutlineOutlined, CheckCircle } from "@mui/icons-material";

export default function TimelineProjects() {
  


  const makeTextBold = (text, boldWords) => {
    const regex = new RegExp(`(${boldWords.join("|")})`, "gi"); // Match full words or phrases
    return text.split(regex).map((part, index) =>
      boldWords.includes(part) ? <i><strong key={index}>{part}</strong></i> : part
    );
  };




  return (
    <Box
      sx={{
        maxWidth: 900,
        width: "90vw",
        mx: "auto",
        p: 3,
        bgcolor: "#000",
        minHeight: "100vh",
      }}
    >
      <Timeline position="alternate" sx={{ py: 3 }}>
        {/* Experience Heading */}
        <TimelineItem sx={{ minHeight: 100 }}>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: "#666", p: 1.5 }}>
              <WorkOutlineOutlined sx={{ color: "#fff", fontSize: 24 }} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "#444" }} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5" fontWeight="bold" color="#ddd" align="center">
              Experience
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* First Chat Bubble - Left */}
        <TimelineItem sx={{ minHeight: 160 }}>
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: "#3498db", p: 1.5 }} />
            <TimelineConnector sx={{ bgcolor: "#444" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Paper
              elevation={3}
              sx={{
                p: 3.5,
                borderRadius: 2,
                bgcolor: "#333",
                color: "#fff",
                maxWidth: 500,
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "50%",
                  right: "-12px",
                  transform: "translateY(-50%)",
                  borderStyle: "solid",
                  borderWidth: "12px 0 12px 12px",
                  borderColor: "transparent transparent transparent #333",
                },
              }}
            >
              <Typography variant="h6" fontWeight="bold" color="#fff">
                Opentext Corporation
              </Typography>
              <Typography variant="subtitle2" color="#bbb">
                2022 - Present
              </Typography>
              <List sx={{ mt: 1 }}>
                {[
                  {
                    text: "Created and implemented REST APIs, enhancing integration in the FILR product.",
                    boldWords: ["REST APIs", "FILR product"],
                  },
                  {
                    text: "Discovered and documented critical bugs, improving product stability.",
                    boldWords: ["critical bugs"],
                  },
                  {
                    text: "Learned about user authentication and permissions management via LDAP and Active Directory.",
                    boldWords: ["user authentication", "permissions management", "LDAP", "Active Directory"],
                  },
                ].map((item, index) => (
                  <ListItem key={index} sx={{ alignItems: "flex-start", gap: "4px", p: 0 }}>
                    <ListItemIcon sx={{ minWidth: 24, mt:2 }}>
                      <CheckCircle sx={{ color: "#4CAF50", fontSize: 15 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2" sx={{ whiteSpace: "normal", wordWrap: "break-word", lineHeight: 1.3 }}>
                           {makeTextBold(item.text, item.boldWords)}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* Second Chat Bubble - Right */}
        <TimelineItem sx={{ minHeight: 160 }}>
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: "#e74c3c", p: 1.5 }} />
            <TimelineConnector sx={{ bgcolor: "#444" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Paper
              elevation={3}
              sx={{
                p: 3.5,
                borderRadius: 2,
                bgcolor: "#222",
                color: "#fff",
                maxWidth: 500,
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "50%",
                  left: "-12px",
                  transform: "translateY(-50%)",
                  borderStyle: "solid",
                  borderWidth: "12px 12px 12px 0",
                  borderColor: "transparent #222 transparent transparent",
                },
              }}
            >
              <Typography variant="h6" fontWeight="bold" color="#fff">
                Another Company
              </Typography>
              <Typography variant="subtitle2" color="#bbb">
                2020 - 2022
              </Typography>
              <List sx={{ mt: 1 }}>
                {[
                  {
                    text: "Worked on microservices architecture to build scalable backend solutions.",
                    boldWords: ["microservices architecture", "scalable backend solutions"],
                  },
                  {
                    text: "Integrated third-party APIs and optimized system performance.",
                    boldWords: ["third-party APIs", "optimized system performance"],
                  },
                  {
                    text: "Led a team to refactor legacy code for better maintainability.",
                    boldWords: ["refactor legacy code", "maintainability"],
                  },
                ].map((item, index) => (
                  <ListItem key={index} sx={{ alignItems: "flex-start", gap: "4px", p: 0 }}>
                    <ListItemIcon sx={{ minWidth: 24, mt:2 }}>
                      <CheckCircle sx={{ color: "#4CAF50", fontSize: 15 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2" sx={{ whiteSpace: "normal", wordWrap: "break-word", lineHeight: 1.3 }}>
                           {makeTextBold(item.text, item.boldWords)}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* Third Chat Bubble - Left */}
        <TimelineItem sx={{ minHeight: 160 }}>
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: "#3498db", p: 1.5 }} />
            <TimelineConnector sx={{ bgcolor: "#444" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Paper
              elevation={3}
              sx={{
                p: 3.5,
                borderRadius: 2,
                bgcolor: "#333",
                color: "#fff",
                maxWidth: 500,
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "50%",
                  right: "-12px",
                  transform: "translateY(-50%)",
                  borderStyle: "solid",
                  borderWidth: "12px 0 12px 12px",
                  borderColor: "transparent transparent transparent #333",
                },
              }}
            >
              <Typography variant="h6" fontWeight="bold" color="#fff">
                Opentext Corporation
              </Typography>
              <Typography variant="subtitle2" color="#bbb">
                2022 - Present
              </Typography>
              <List sx={{ mt: 1 }}>
                {[
                  {
                    text: "Created and implemented REST APIs, enhancing integration in the FILR product.",
                    boldWords: ["REST APIs", "FILR product"],
                  },
                  {
                    text: "Discovered and documented critical bugs, improving product stability.",
                    boldWords: ["critical bugs"],
                  },
                  {
                    text: "Learned about user authentication and permissions management via LDAP and Active Directory.",
                    boldWords: ["user authentication", "permissions management", "LDAP", "Active Directory"],
                  },
                ].map((item, index) => (
                  <ListItem key={index} sx={{ alignItems: "flex-start", gap: "4px", p: 0 }}>
                    <ListItemIcon sx={{ minWidth: 24, mt:2 }}>
                      <CheckCircle sx={{ color: "#4CAF50", fontSize: 15 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2" sx={{ whiteSpace: "normal", wordWrap: "break-word", lineHeight: 1.3 }}>
                           {makeTextBold(item.text, item.boldWords)}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
