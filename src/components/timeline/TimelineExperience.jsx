import React, { useState } from "react";
import { Typography, Box, Paper, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
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

  const timelineData = [
    {
      title: "Opentext Corp.",
      subtitle: "2024 - Present",
      details: [
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
      ],
    },
    
    // Add more timeline items here if needed
  ];

  return (
    <div className="pb-10 mx-[10%] sm:mx-[15%] md:mx-[20%] lg:mx-[25%]">
      <Box
        sx={{
          maxWidth: 900,
          width: "auto",
          mx: "auto",
          p: 3,
          bgcolor: "#000",
        }}
      >
        <div className="relative flex flex-col gap-10">
          {/* Vertical Line */}
          <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-blue-500"></div>

          {timelineData.map((item, index) => (
            <div key={index} className="relative flex items-start gap-4">
              {/* Timeline Dot */}
              <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full"></div>

              {/* Timeline Content */}
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2, sm: 3.5 },
                  borderRadius: 2,
                  width: { xs: "100%", sm: 250 },
                  bgcolor: "#333",
                  color: "#fff",
                  maxWidth: 500,
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "20px", // Adjust the position of the arrow
                    left: "-12px", // Position the arrow on the left side
                    borderStyle: "solid",
                    borderWidth: "12px 12px 12px 0",
                    borderColor: "transparent #333 transparent transparent",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="#fff"
                  fontSize={{ xs: "1rem", sm: "1.25rem" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="#bbb"
                  fontSize={{ xs: "0.75rem", sm: "0.875rem" }}
                >
                  {item.subtitle}
                </Typography>

                {/* Read More Button */}
                <div className="mt-3">
                  <button
                    className="bg-blue-500 text-white px-3 py-1.5 text-[10px] xs:ml-0 xs:py-[2px] sm:px-4 sm:py-2 sm:ml-0 sm:text-base rounded-md hover:bg-blue-600 transition flex items-center gap-2 group"
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
                        {item.details.map((detail, detailIndex) => (
                          <ListItem
                            key={detailIndex}
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
                                  {makeTextBold(detail.text, detail.boldWords)}
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
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
}
