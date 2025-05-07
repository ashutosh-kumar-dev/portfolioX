import React, { useState } from "react";
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
import { GoArrowRight } from "react-icons/go";

export default function TimelineExperience() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const makeTextBold = (text, boldWords) => {
    const regex = new RegExp(`(${boldWords.join("|")})`, "gi");
    return text.split(regex).map((part, index) =>
      boldWords.includes(part) ? <i key={index}><strong>{part}</strong></i> : part
    );
  };

  return (
    <div className="pb-10">
      <Box
        sx={{
          maxWidth: 900,
          width: "90vw",
          mx: "auto",
          p: 3,
          bgcolor: "#000",
        }}
      >
        <Timeline position="left" sx={{ py: 3, }}>
          {/* Experience Heading */}
          <TimelineItem sx={{ minHeight: 100 }}>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "#666", p: 1.5 }}>
                <WorkOutlineOutlined sx={{ color: "#fff", fontSize: 24 }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#444" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                variant="h5"
                fontWeight="bold"
                color="#ddd"
                align="center"
                sx={{ ml: -10, pt: 1.5 }}
              >
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
            <TimelineContent>
              <Paper
                elevation={3}
                sx={{
                 
                  p: { xs: 2, sm: 3.5 },
                  borderRadius: 2,
                  width: { xs: 150, sm: 250 },
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
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="#fff"
                  fontSize={{ xs: "1rem", sm: "1.25rem" }}
                >
                  Opentext Corp
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="#bbb"
                  fontSize={{ xs: "0.75rem", sm: "0.875rem" }}
                >
                  2024 - Present
                </Typography>

                {/* Read More Button */}
                <div className="mt-3">
                  <button
                    className="bg-blue-500 text-white px-3 py-1.5 text-[10px] xs:ml-4 xs:py-[2px] sm:px-4 sm:py-2 sm:ml-12 sm:text-base rounded-md hover:bg-blue-600 transition flex items-center gap-2 group"
                    onClick={toggleDetails}
                  >
                    {showDetails ? "Close" : "Read More"}
                    <GoArrowRight className="transition-transform duration-300 transform group-hover:-rotate-45 text-lg sm:text-xl" />
                  </button>
                </div>

                {/* Floating Box for Details */}
                {showDetails && (
                  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <div className="bg-gray-800 text-white p-4 sm:p-6 rounded-lg max-w-xs sm:max-w-md w-full relative">
                      <button
                        className="absolute top-2 right-2 text-gray-400 hover:text-white"
                        onClick={toggleDetails}
                      >
                        ✕
                      </button>
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
                            boldWords: [
                              "user authentication",
                              "permissions management",
                              "LDAP",
                              "Active Directory",
                            ],
                          },
                        ].map((item, index) => (
                          <ListItem
                            key={index}
                            sx={{ alignItems: "flex-start", gap: "4px", p: 0 }}
                          >
                            <ListItemIcon sx={{ minWidth: 24, mt: 2 }}>
                              <CheckCircle
                                sx={{ color: "#4CAF50", fontSize: 15 }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography
                                  variant="body2"
                                  sx={{
                                    whiteSpace: "normal",
                                    wordWrap: "break-word",
                                    lineHeight: 1.3,
                                  }}
                                >
                                  {makeTextBold(item.text, item.boldWords)}
                                </Typography>
                              }
                            />
                          </ListItem>
                        ))}
                      </List>
                    </div>
                  </div>
                )}
              </Paper>
            </TimelineContent>
          </TimelineItem>

          {/* Second Chat Bubble - Right */}
          {/* <TimelineItem sx={{ minHeight: 160 }}>
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
        </TimelineItem> */}
      
      </Timeline>
    </Box>

      
    </div>
  );
}
