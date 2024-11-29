import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { RegexComponent } from '../types';
import { visualComponents } from '../data/visualComponents';

interface VisualBuilderProps {
  components: RegexComponent[];
  onAddComponent: (component: RegexComponent) => void;
  onRemoveComponent: (index: number) => void;
  onUpdateComponent: (index: number, updates: Partial<RegexComponent>) => void;
}

export const VisualBuilder: React.FC<VisualBuilderProps> = ({
  components,
  onAddComponent,
  onRemoveComponent,
  onUpdateComponent,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Visual Pattern Builder
        </h3>
        <div className="relative group">
          <button className="btn bg-primary-500 text-white hover:bg-primary-600">
            <FiPlus className="w-4 h-4 mr-2" />
            Add Component
          </button>
          <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg 
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all
                        border border-gray-200 dark:border-gray-700 z-10">
            <div className="p-2 space-y-1">
              {Object.entries(visualComponents).map(([category, items]) => (
                <div key={category}>
                  <div className="text-xs font-medium text-gray-500 dark:text-gray-400 px-2 py-1">
                    {category}
                  </div>
                  {items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => onAddComponent(item)}
                      className="w-full text-left px-3 py-2 text-sm rounded-lg
                               hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <div className="font-medium text-gray-900 dark:text-white">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {item.description}
                      </div>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {components.map((component, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-lg
                     border border-gray-200 dark:border-gray-700"
          >
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {component.name}
              </div>
              {component.configurable && (
                <input
                  type="text"
                  value={component.value}
                  onChange={(e) => onUpdateComponent(index, { value: e.target.value })}
                  className="mt-1 w-full text-sm input"
                  placeholder={component.placeholder}
                />
              )}
            </div>
            <button
              onClick={() => onRemoveComponent(index)}
              className="p-1 text-gray-500 hover:text-red-500"
              aria-label="Remove component"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};