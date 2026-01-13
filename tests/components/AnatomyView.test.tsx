import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AnatomyView } from '../../src/components/AnatomyView';

describe('AnatomyView', () => {
  const mockOnSelectBodyPart = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the anatomy view with title', () => {
    render(
      <AnatomyView
        onSelectBodyPart={mockOnSelectBodyPart}
        selectedBodyPart={null}
      />
    );

    expect(screen.getByText('Select a Body Part')).toBeInTheDocument();
    expect(screen.getByText('Click on the area you want to stretch and strengthen')).toBeInTheDocument();
  });

  it('should render front and back view buttons', () => {
    render(
      <AnatomyView
        onSelectBodyPart={mockOnSelectBodyPart}
        selectedBodyPart={null}
      />
    );

    expect(screen.getByText('Front View')).toBeInTheDocument();
    expect(screen.getByText('Back View')).toBeInTheDocument();
  });

  it('should start with front view selected', () => {
    render(
      <AnatomyView
        onSelectBodyPart={mockOnSelectBodyPart}
        selectedBodyPart={null}
      />
    );

    const frontButton = screen.getByText('Front View');
    expect(frontButton).toHaveClass('bg-blue-600');
  });

  it('should switch to back view when clicked', () => {
    render(
      <AnatomyView
        onSelectBodyPart={mockOnSelectBodyPart}
        selectedBodyPart={null}
      />
    );

    const backButton = screen.getByText('Back View');
    fireEvent.click(backButton);

    expect(backButton).toHaveClass('bg-blue-600');
  });

  it('should display selected body part', () => {
    const selectedBodyPart = {
      id: 'neck',
      name: 'Neck',
      region: 'front' as const,
      description: 'Cervical spine',
    };

    render(
      <AnatomyView
        onSelectBodyPart={mockOnSelectBodyPart}
        selectedBodyPart={selectedBodyPart}
      />
    );

    expect(screen.getByText('Selected:')).toBeInTheDocument();
    // Use getAllByText since "Neck" appears both in SVG and in selection indicator
    const neckElements = screen.getAllByText('Neck');
    expect(neckElements.length).toBeGreaterThanOrEqual(2);
  });

  it('should render body part labels in the SVG', () => {
    render(
      <AnatomyView
        onSelectBodyPart={mockOnSelectBodyPart}
        selectedBodyPart={null}
      />
    );

    // Check for some front view body parts
    expect(screen.getByText('Neck')).toBeInTheDocument();
    expect(screen.getByText('Shoulders')).toBeInTheDocument();
    expect(screen.getByText('Chest')).toBeInTheDocument();
  });

  it('should call onSelectBodyPart when clicking a body region', () => {
    render(
      <AnatomyView
        onSelectBodyPart={mockOnSelectBodyPart}
        selectedBodyPart={null}
      />
    );

    // Find and click on the Neck text element's parent (the clickable group)
    const neckText = screen.getByText('Neck');
    const neckGroup = neckText.closest('g');

    if (neckGroup) {
      fireEvent.click(neckGroup);
      expect(mockOnSelectBodyPart).toHaveBeenCalledTimes(1);
      expect(mockOnSelectBodyPart).toHaveBeenCalledWith(
        expect.objectContaining({
          id: 'neck',
          name: 'Neck',
          region: 'front',
        })
      );
    }
  });
});
