import { Box, Typography } from '@mui/material';
import React from 'react';

const Help = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        overflowY: 'auto',
        background: 'linear-gradient(to right, #141E30, #243B55)', // Optional gradient
        color: 'grey',
        padding: 4,
      }}
    >
      <Typography variant="h4" gutterBottom textAlign="center">
        Help & Support
      </Typography>

      <Box sx={{ maxWidth: '900px', margin: '0 auto' }}>
        <Section title="Getting Started">
          The Excel Analytics Platform allows you to upload, analyze, and visualize your Excel files easily. To get started, click the Upload button and select your .xlsx or .xls file. Once uploaded, your data will be automatically parsed and displayed for further analysis.
        </Section>

        <Section title="Creating Dashboards and Charts">
          You can create dashboards by navigating to the Dashboards section and selecting New Dashboard. From there, you can drag and drop charts, tables, and key performance indicators (KPIs) onto your canvas. The platform supports various chart types including bar charts, pie charts, line graphs, and more.
        </Section>

        <Section title="Managing Data">
          Use the Data Cleaner tool to remove duplicate values, filter out empty cells, and apply basic transformations. You can also rename columns, change data types, or join multiple sheets using the Data Model Editor.
        </Section>

        <Section title="Exporting and Sharing">
          Dashboards and reports can be exported as PDFs, Excel files, or images. You can also share them with your team by clicking the Share button, entering email addresses, and assigning viewer or editor roles.
        </Section>

        <Section title="Real-Time Data and Integrations">
          The platform supports live syncing with external sources like Google Sheets, SQL databases, and APIs. To enable syncing, go to Settings → Data Sources, connect your source, and toggle on Auto Sync.
        </Section>

        <Section title="Security and Permissions">
          The platform offers role-based access control, allowing admins to manage user roles and permissions. All activities are logged and can be reviewed under Admin → Security Logs.
        </Section>

        <Section title="Frequently Asked Questions (FAQs)">
          <Typography variant="body2">
            <strong>Q:</strong> Why isn’t my chart displaying correctly?<br />
            <strong>A:</strong> Please ensure that your data is correctly selected and that there are no empty fields.
            <br /><br />
            <strong>Q:</strong> Can I schedule automated reports?<br />
            <strong>A:</strong> Yes, go to the Reports section and set up a time and recipient list.
          </Typography>
        </Section>

        <Section title="Need More Help?">
          If you need further assistance, use the Live Chat feature in the bottom-right corner or email us at <a href="mailto:support@excelanalytics.io" style={{ color: '#1ABC9C' }}>support@excelanalytics.io</a>.
        </Section>
      </Box>
    </Box>
  );
};

const Section = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body2" textAlign="justify" sx={{ fontSize: 14 }}>
      {children}
    </Typography>
  </Box>
);

export default Help;
