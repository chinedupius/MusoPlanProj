# Version Control System (VCS) Research Report

## Introduction
For the development of the MusoPlan software at Globex Corporation, a robust Version Control System (VCS) is essential. This report outlines the research conducted on various VCS options, evaluating their benefits and alignment with organizational requirements. The chosen VCS is then installed and configured for the project.

## Different VCS Investigated
1. **Git**: A distributed VCS known for its efficiency and support for non-linear development.
2. **Subversion (SVN)**: A centralized VCS, easy to use and with good support for binary files.
3. **Mercurial**: Similar to Git, it's a distributed VCS, known for its simplicity and high performance.

## Benefits of Different VCS
- **Git**:
  - Supports distributed workflows, allowing offline work and redundancy.
  - Excellent branching and merging capabilities.
  - Large community and extensive ecosystem of tools.
- **Subversion (SVN)**:
  - Centralized model simplifies certain administrative controls.
  - Handles binary files more efficiently than Git.
  - Easier to implement access control.
- **Mercurial**:
  - User-friendly interface, easier to learn for beginners.
  - Fast and efficient handling of large codebases.
  - Robust networking capabilities.

## Chosen VCS: Git
Given the requirements of Globex Corporation, Git is the chosen VCS for the following reasons:
- Aligns with the distributed version control system requirement.
- Its branching and merging capabilities are superior, facilitating feature-based development.
- Git's large community support aligns with the need for a well-supported ecosystem.

## Installation Process
The installation of Git involved the following steps:
1. Downloading the Git installer from the official [Git website](https://git-scm.com/).
2. Running the installer and selecting the required options.
3. Verifying the installation by running `git --version` in the command line.

No significant issues were encountered during installation. Pre-installation considerations included ensuring compatibility with the existing operating system and backup of any existing repositories.

## Potential Disruptions
The installation itself caused minimal disruption. However, transitioning to Git from another VCS or starting version control afresh could temporarily affect workflows, especially for team members unfamiliar with Git.

## Configuration Process
Post-installation, Git was configured to meet organizational requirements:
1. Setting global configuration for author identification: