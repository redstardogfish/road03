module EmployeesHelper
  def random_employees_array
    
    @emp_array = []
    (0..(@table_rows*3-@employees.count-1)).each do |place|
      @emp_array[place]= "empty"
    end
    @employees.each do |emp|
      @emp_array << emp
    end
    @random_emp_array = @emp_array.sort_by{rand}
  end
  
  
private
  def find_slot
    @row = @emp_array.sort_by{rand}.first
    @slot = (0..2).sort_by{rand}.first
    find_slot unless @emp_array[@row]
  end

end
