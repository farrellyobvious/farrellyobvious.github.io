# Battle Card Generator

A React application for generating Box Partner battle cards from structured input data.

## Overview

This application allows users to:
- Upload CSV data containing battle card content
- Preview the generated battle card
- Generate and download HTML battle cards
- Customize battle card content through a form interface

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/battlecard-generator.git
```

2. Install dependencies:
```bash
cd battlecard-generator
npm install
```

3. Start the development server:
```bash
npm start
```

### Usage

1. Prepare your battle card content in CSV format
2. Upload the CSV or input data manually through the form
3. Preview the generated battle card
4. Download the HTML file

## CSV Format

The input CSV should contain the following columns:
- partner_badge
- solution_title
- value_prop
- component_description
- discovery_q1
- discovery_q2
- discovery_q3
- success_story_client
- success_story_description
- success_result1
- success_result2
- success_result3
- differentiator1
- differentiator2
- differentiator3

## License

This project is licensed under the MIT License - see the LICENSE file for details
