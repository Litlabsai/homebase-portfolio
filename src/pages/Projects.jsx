import { useState } from 'react';
 
import { motion, AnimatePresence } from 'framer-motion';
import { useNotifier } from '../components/Notification';
import { useProjects } from '../hooks/useProjects';
import Loader from '../components/Loader';
import { FiPlus, FiTrash2, FiFilter, FiSearch, FiGrid, FiList } from 'react-icons/fi';

const Projects = () => {
  const { projects, loading, addProject, deleteProject } = useProjects();
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({ title: '', tags: '', description: '' });
  const { notify } = useNotifier();

  const handleAddProject = async (e) => {
    e.preventDefault();
    if (!newProject.title.trim()) {
      notify('Project title is required');
      return;
    }
    await addProject({
      ...newProject,
      tags: newProject.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      status: 'Active',
    });
    setNewProject({ title: '', tags: '', description: '' });
    setIsModalOpen(false);
    notify('Project added successfully! 🚀');
  };

  const handleDeleteProject = async (id, title) => {
    if (window.confirm(`Delete "${title}"? This cannot be undone.`)) {
      await deleteProject(id);
      notify('Project deleted');
    }
  };

  if (loading) {
    return <Loader />;
  }

  const filteredProjects = projects.filter((p) => {
    const matchesFilter = filter === 'All' || p.status === filter;
    const matchesSearch = !searchTerm || 
      p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const statusColors = {
    Active: '#2CB67D',
    Pending: '#F2B900',
    Completed: '#7F5AF0',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="projects-container">
      {/* Header */}
      <motion.header 
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            Projects
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Manage and track your portfolio projects
          </motion.p>
        </div>
        <motion.div 
          className="stats-badge"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30, delay: 0.3 }}
        >
          <span>{projects.length}</span> Projects
        </motion.div>
      </motion.header>

      {/* Toolbar */}
      <motion.div 
        className="toolbar"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="filter-tabs">
          {['All', 'Active', 'Pending', 'Completed'].map((tab) => (
            <motion.button
              key={tab}
              className={`filter-tab ${filter === tab ? 'active' : ''}`}
              onClick={() => setFilter(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={filter === tab ? {
                background: statusColors[tab] || 'var(--accent-primary)',
              } : {}}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        <div className="toolbar-actions">
          {/* Search */}
          <div className="search-box">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          {/* View Toggle */}
          <div className="view-toggle">
            <motion.button
              className={viewMode === 'grid' ? 'active' : ''}
              onClick={() => setViewMode('grid')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGrid />
            </motion.button>
            <motion.button
              className={viewMode === 'list' ? 'active' : ''}
              onClick={() => setViewMode('list')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiList />
            </motion.button>
          </div>

          {/* Add Button */}
          <motion.button 
            className="aurora-button"
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiPlus /> Add Project
          </motion.button>
        </div>
      </motion.div>

      {/* Projects Grid/List */}
      <motion.div 
        layout
        className={`project-grid ${viewMode}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="aurora-card project-card"
                whileHover={{ 
                  y: -5, 
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div className="project-card-header">
                  <h3 className="project-card-title">{project.title}</h3>
                  <motion.div 
                    className="status-dot"
                    style={{ backgroundColor: statusColors[project.status] || '#888' }}
                    title={project.status}
                    whileHover={{ scale: 1.5 }}
                    animate={{ 
                      boxShadow: [
                        `0 0 0 ${statusColors[project.status] || '#888'}`,
                        `0 0 10px ${statusColors[project.status] || '#888'}`,
                        `0 0 0 ${statusColors[project.status] || '#888'}`,
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                
                {project.description && (
                  <p className="project-description">{project.description}</p>
                )}
                
                <p className="project-meta">
                  Updated {project.lastUpdated?.toDate ? 
                    new Date(project.lastUpdated.toDate()).toLocaleDateString() : 
                    'Recently'
                  }
                </p>
                
                <div className="project-card-tags">
                  {project.tags?.map((tag, i) => (
                    <motion.span 
                      key={tag} 
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                <div className="project-card-footer">
                  <div className="project-stats">
                    <span>#{String(index + 1).padStart(3, '0')}</span>
                  </div>
                  <motion.button 
                    className="delete-btn" 
                    onClick={() => handleDeleteProject(project.id, project.title)}
                    title="Delete Project"
                    whileHover={{ scale: 1.2, color: '#E53E3E' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiTrash2 />
                  </motion.button>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="empty-state aurora-card"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ fontSize: '4rem', marginBottom: '1rem' }}
              >
                📂
              </motion.div>
              <p>No projects found{searchTerm ? ` for "${searchTerm}"` : ''}.</p>
              <p style={{ fontSize: '0.875rem', opacity: 0.7 }}>
                {searchTerm ? 'Try a different search term' : 'Add one to get started!'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Add Project Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="aurora-card modal-content"
              initial={{ y: -50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleAddProject} className="add-project-form">
                <h2 className="modal-title">
                  <FiPlus style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                  Add New Project
                </h2>
                
                <div className="form-group">
                  <label htmlFor="project-title">Project Title *</label>
                  <input
                    id="project-title"
                    type="text"
                    className="aurora-input"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    placeholder="e.g., My Awesome App"
                    required
                    autoFocus
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="project-description">Description</label>
                  <textarea
                    id="project-description"
                    className="aurora-input"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    placeholder="Brief description of your project..."
                    rows={3}
                    style={{ resize: 'vertical' }}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="project-tags">Tags (comma-separated)</label>
                  <input
                    id="project-tags"
                    type="text"
                    className="aurora-input"
                    value={newProject.tags}
                    onChange={(e) => setNewProject({ ...newProject, tags: e.target.value })}
                    placeholder="e.g., React, Node.js, AI"
                  />
                </div>
                
                <div className="form-actions">
                  <motion.button 
                    type="button" 
                    className="aurora-button secondary" 
                    onClick={() => setIsModalOpen(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button 
                    type="submit" 
                    className="aurora-button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiPlus style={{ marginRight: '4px' }} /> Add Project
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
