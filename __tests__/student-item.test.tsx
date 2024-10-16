import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import StudentItem from '@/components/student-item/student-item';
import { Student } from '@/lib/types';


describe('StudentItem', () => {
  const mockStudent = {
    id: '1',
    name: 'John Doe',
    major: 'Computer Science',
    gpa: 3.8,
    registrationNumber: '12345',
    dob: '1999-01-01',
  } as Student;

  it('renders student information correctly', () => {
    render(<StudentItem student={mockStudent} />);

    // Check if student name is rendered
    expect(screen.getByText('John Doe')).toBeInTheDocument();

    // Check if major is rendered
    expect(screen.getByText('Computer Science')).toBeInTheDocument();

    // Check if GPA is rendered
    expect(screen.getByText('3.8')).toBeInTheDocument();

    // Check if registration number is rendered
    expect(screen.getByText('12345')).toBeInTheDocument();

    // Check if date of birth is rendered
    expect(screen.getByText('1999-01-01')).toBeInTheDocument();
  });

  it('renders the "View" link with correct href', () => {
    render(<StudentItem student={mockStudent} />);

    const viewLink = screen.getByText('View').closest('a');
    expect(viewLink).toHaveAttribute('href', '/students/1');
  });

});