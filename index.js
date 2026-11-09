/**
 * agencyskills - Agent skills for people who run budgets, teams, and clients.
 * Open-source Agent Skills specification compliant bundle.
 */

const fs = require('fs');
const path = require('path');

const SKILLS = [
  'client-onboarding',
  'media-plan',
  'budget-pacing',
  'creative-brief',
  'creative-testing-matrix',
  'post-campaign-report',
  'agency-scoping',
  'new-business',
  'offline-to-online',
  'compliance-check',
  'vendor-evaluation',
  'crisis-comms'
];

function getSkillPath(skillName) {
  if (!SKILLS.includes(skillName)) {
    throw new Error(`Unknown skill: ${skillName}`);
  }
  return path.join(__dirname, 'skills', skillName, 'SKILL.md');
}

function loadSkill(skillName) {
  const filePath = getSkillPath(skillName);
  return fs.readFileSync(filePath, 'utf-8');
}

module.exports = {
  SKILLS,
  getSkillPath,
  loadSkill
};
