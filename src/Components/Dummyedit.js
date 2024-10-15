import React, { useState } from 'react';
import {
  TextField, Button, MenuItem, Checkbox, ListItemText, Select, InputLabel, FormControl, Chip, Box, Typography
} from '@mui/material';
import './Dummyedit.css'; // Custom styles if needed

const Dummyedit = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    website: '',
    location: '',
    fundingStage: [],
    partnershipInterests: [],
    ecosystem: [],
    category: [],
    requestType: [],
    bioData: '',
    whitepaper: '',
    githubLink: '',
    twitterLink: '',
    redditLink: '',
    mediumLink: '',
    telegramLink: '',
    projectStatement: '',
    oneLiner: '',
    coverPicture: null,
    profilePicture: null,
  });

  const locations = ['USA', 'Canada', 'India', 'Australia'];
  const fundingStages = ['Seed', 'Series A', 'Series B', 'Growth'];
  const partnershipInterests = ['Technical', 'Marketing', 'Legal'];
  const ecosystems = ['Ethereum', 'Solana', 'Binance Smart Chain'];
  const categories = ['DeFi', 'NFT', 'Gaming'];
  const requestTypes = ['Funding', 'Partnership', 'Incubation'];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMultiSelectChange = (event, name) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      [name]: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleFileChange = (event, name) => {
    setFormData({ ...formData, [name]: event.target.files[0] });
  };

  return (
    <div className="edit-profile-container">
    <Typography variant="h5">Edit Profile</Typography>

    <form>
      {/* First Row (Project Name & Website) */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="projectName">Project Name</label>
          <TextField
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
          />
        </div>

        <div className="form-group">
          <label htmlFor="website">Website</label>
          <TextField
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
          />
        </div>
      </div>

      {/* Location and Funding Stage */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <FormControl fullWidth>
            <InputLabel>Location</InputLabel>
            <Select
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              {locations.map((location) => (
                <MenuItem key={location} value={location}>
                  {location}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="form-group">
          <label htmlFor="fundingStage">Funding Stage</label>
          <FormControl fullWidth>
            <Select
              label="Funding Stage"
              multiple
              value={formData.fundingStage}
              onChange={(e) => handleMultiSelectChange(e, 'fundingStage')}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} sx={{ margin: '2px' }} />
                  ))}
                </Box>
              )}
            >
              {fundingStages.map((stage) => (
                <MenuItem key={stage} value={stage}>
                  <Checkbox checked={formData.fundingStage.indexOf(stage) > -1} />
                  <ListItemText primary={stage} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      {/* Additional Rows... */}
      <Box sx={{ mb: 2 }}>
        <Button variant="contained" component="label" fullWidth>
          Upload Cover Picture
          <input type="file" hidden onChange={(e) => handleFileChange(e, 'coverPicture')} />
        </Button>
        {formData.coverPicture && (
          <Typography variant="body2">
            {formData.coverPicture.name} - {formData.coverPicture.size / 1000} KB
          </Typography>
        )}
      </Box>

      {/* Save and Cancel buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button variant="outlined" fullWidth sx={{ mr: 1 }}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" fullWidth sx={{ ml: 1 }}>
          Save
        </Button>
      </Box>
    </form>
  </div>
  );
};

export default Dummyedit;
